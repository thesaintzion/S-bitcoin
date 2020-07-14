import { ArticleModel } from './aricle.model';
import { ArticleSate } from '../reducers/artitle.reducer';

export interface AppState {
   readonly articles: ArticleSate
}