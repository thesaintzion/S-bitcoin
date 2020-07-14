import {Action} from '@ngrx/store';
import { UserActionTypes } from '../shared/enum/user-action-types.enum';




export class ActionParent implements Action {
    type: any;
    payload: any
}

// ADD

export class AddUser implements ActionParent {
    type = UserActionTypes.Add;
    constructor( public payload: any){}
}

export class GetUser implements ActionParent {
    type = UserActionTypes.Get;
    constructor( public payload: any){}
}

export class RemoveUser implements ActionParent {
    type = UserActionTypes.Remove;
    constructor( public payload: any){}
}

export class UpdateUser implements ActionParent {
    type = UserActionTypes.Update;
    constructor( public payload: any){}
}

