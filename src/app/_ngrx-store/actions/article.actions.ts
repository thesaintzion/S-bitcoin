import {Action} from '@ngrx/store';
import { ArticleModel } from '../models/aricle.model';
import { ArticleActionTypes } from '../enums/article-action-types.enum';



// Get articles 
export class GetArticles implements Action {
    readonly type = ArticleActionTypes.Get
}
export class GetArticlesSuccess implements Action {
    readonly type = ArticleActionTypes.Get_Success
    constructor(public payload: Array<ArticleModel>){}
}
export class GetArticlesError implements Action {
    readonly type = ArticleActionTypes.Get_Error
    constructor(public payload: Error){}
}

// Add articles 
export class AddArticle implements Action{
    readonly type = ArticleActionTypes.Add;
    constructor(public payload: ArticleModel){}
}
export class AddArticleSuccess implements Action{
    readonly type = ArticleActionTypes.Add_Success;
    constructor(public payload: ArticleModel){}
}
export class AddArticleError implements Action{
    readonly type = ArticleActionTypes.Add_Error;
    constructor(public payload: ArticleModel){}
}

// Delete articles 
export class DeleteArticle implements Action{
    readonly type = ArticleActionTypes.Delete;
    constructor(public payload: ArticleModel){}
}
export class DeleteArticleSuccess implements Action{
    readonly type = ArticleActionTypes.Delete_Success;
    constructor(public payload: ArticleModel){}
}
export class DeleteArticleError implements Action{
    readonly type = ArticleActionTypes.Delete_Error;
    constructor(public payload: ArticleModel){}
}


export type ArticleAction = 
    GetArticles |
    GetArticlesSuccess |
    GetArticlesError |
    AddArticle |
    AddArticleSuccess | 
    AddArticleError |
    DeleteArticle |
    DeleteArticleSuccess |
    DeleteArticleError; 
