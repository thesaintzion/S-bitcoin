// 0.1 Action types
import {UserActionTypes} from '../shared/enum/user-action-types.enum';
// 0.2 Action parent
import {ActionParent} from '../actions/user.actions';
// 0.3 Model
import {User} from '../models/User';

// 0.4 the initial state...
export const initialState: Array<User> = [
    {
        _id: '1',
        firstname: 'Chizoba',
        lastname: 'Patiance',
        username: 'chizobap',
        email: 'chi@gmail.com',
        // date_of_birth: {
        //     day: '30',
        //     month: '02',
        //     year: '1995'
        // },
        phone_number: '0904432393',
        gender: 'Female',
        occupation: 'Student',
        current_city: 'Lagos',
        country: 'Nigeria',
        state: 'Abia',
        activated: true,
        profile_photo_url: 'http://localhost:4200/assets/img/consult.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        _id: '2',
        firstname: 'Saint',
        lastname: 'Zion',
        username: 'saintzion',
        email: 'saint@gmail.com',
        // date_of_birth: {
        //     day: '11',
        //     month: '07',
        //     year: '1999'
        // },
        phone_number: '0904432393',
        gender: 'Male',
        occupation: 'Student',
        current_city: 'Lagos',
        country: 'Nigeria',
        state: 'Imo',
        activated: true,
        profile_photo_url: 'http://localhost:4200/assets/img/user.png',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        _id: '3',
        firstname: 'Saint 2',
        lastname: 'Zion 2',
        username: 'saintzion',
        email: 'saint@gmail.com',
        // date_of_birth: {
        //     day: '11',
        //     month: '07',
        //     year: '1999'
        // },
        phone_number: '0904432393',
        gender: 'Male',
        occupation: 'Student',
        current_city: 'Lagos',
        country: 'Nigeria',
        state: 'Imo',
        activated: true,
        profile_photo_url: 'http://localhost:4200/assets/img/consult.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        _id: '4',
        firstname: 'Saint 4',
        lastname: 'Zion 4',
        username: 'saintzion',
        email: 'saint@gmail.com',
        // date_of_birth: {
        //     day: '11',
        //     month: '07',
        //     year: '1999'
        // },
        phone_number: '0904432393',
        gender: 'Male',
        occupation: 'Student',
        current_city: 'Lagos',
        country: 'Nigeria',
        state: 'Imo',
        activated: true,
        profile_photo_url: 'http://localhost:4200/assets/img/consult.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

// 0.5 reducer function... with default state or action...
 export  function useReducer(state = initialState, action: ActionParent){
     if(action.type){
        // Add
        if(action.type === UserActionTypes.Add){
            return [...state, action.payload];
        }else if(action.type === UserActionTypes.Get){
            return state; 
        }
        else{
            return state; 
        }  
     }
 }