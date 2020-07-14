import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ArticleAction, GetArticlesSuccess, GetArticlesError, AddArticleSuccess, GetArticles, AddArticle, DeleteArticle, DeleteArticleSuccess, AddArticleError, DeleteArticleError } from '../actions/article.actions';
import { ArticleActionTypes } from '../enums/article-action-types.enum';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';

@Injectable()
export  class ArticleEffect {

    constructor(private actions: Actions, private apiservice: ApiService){}

    // Get articles effect
    @Effect() getArticlesEffect = this.actions.pipe(
       ofType<GetArticles>(ArticleActionTypes.Get),
       mergeMap( () =>
           this.apiservice.getArticles().pipe( 
           map(data => new GetArticlesSuccess(data)),
           catchError( err => of(new GetArticlesError(err)))
           )))

            // Add articles effect
    @Effect() addArticleEffect = this.actions.pipe(
        ofType<AddArticle>(ArticleActionTypes.Add),
        mergeMap( data =>
             this.apiservice.addArticle(data.payload).pipe( 
            map( () => new AddArticleSuccess(data.payload)),
            catchError( err => of(new AddArticleError(err)))
            )))
  
            // Delete articles effect
    @Effect() deleteArticleEffect = this.actions.pipe(
        ofType<DeleteArticle>(ArticleActionTypes.Delete),
        mergeMap( data =>
             this.apiservice.deleteArticle(data.payload).pipe( 
            map( () => new DeleteArticleSuccess(data.payload)),
            catchError( error => of(new DeleteArticleError(error)))
        )))
}