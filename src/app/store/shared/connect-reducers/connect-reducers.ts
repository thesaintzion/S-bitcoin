import {useReducer} from '../../reducers/user.reducer'
import { articleReducer } from 'src/app/_ngrx-store/reducers/artitle.reducer'
export class ConnectReducers {
    static reduers = {
        users: useReducer,
        articles:  articleReducer
    }
  
}