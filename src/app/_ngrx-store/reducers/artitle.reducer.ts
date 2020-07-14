import { ArticleModel } from "../models/aricle.model";
import { ArticleAction } from '../actions/article.actions';
import { ArticleActionTypes } from '../enums/article-action-types.enum';


export interface ArticleSate {
  list: ArticleModel[];
  loading: boolean;
  error: Error;
}

const initialState: ArticleSate = {
list:  [
  // {
  //   "id": "1",
  //   "title": "Title one",
  //   "body": "Body on article one Body on article one Body on article one"
  // },
  // {
  //   "id": "2",
  //   "title": "Title two",
  //   "body": "Body on article two Body on article one Body on article two"
  // },
  // {
  //   "id": "3",
  //   "title": "Title three",
  //   "body": "Body on article two Body on article the Body on article three"
  // },
  // {
  //   "id": "4",
  //   "title": "Title four",
  //   "body": "Body on article four Body on article the Body on article four"
  // },
  // {
  //   "id": "123",
  //   "body": "Body on article two Body on article.",
  //   "title": "Title 4"
  // }
],
loading: false,
error: undefined
    }



export function  articleReducer(state: ArticleSate = initialState, action:  ArticleAction){
  // Get
  if(action.type === ArticleActionTypes.Get){
    return {...state, loading: true}
  }
  else if(action.type === ArticleActionTypes.Get_Success){
    return {...state, list: action.payload, loading: false}; 
  }
  else if(action.type === ArticleActionTypes.Get_Error){
    return {...state, error: action.payload, loading: false}; 
  }
  
  // Add
  else if(action.type === ArticleActionTypes.Add){
    return {...state, loading: true}; 
  }
  else if(action.type === ArticleActionTypes.Add_Success){
    return {...state, list: action.payload, loading: false}; 
  }
  else if(action.type === ArticleActionTypes.Add_Error){
    return {...state, error: action.payload, loading: false}; 
  }

  // Delete
  else if(action.type === ArticleActionTypes.Delete){
    return {...state, loading: true}; 
  }
  else if(action.type === ArticleActionTypes.Delete_Success){
    let list = state.list.filter(article => article.id !== action.payload.toString());
    return {...state, list: list, loading: false}; 
  }
  else if(action.type === ArticleActionTypes.Delete_Error){
    return {...state, error: action.payload, loading: false}; 
  }
  else{
    return state
  }
  // switch(action.type){
  //    case ArticleActionTypes.Add_Success:
  //    return {...state, list: action.payload, loading: false};
  //    default:
  //      return state
  // }
}