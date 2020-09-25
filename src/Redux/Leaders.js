import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
   isLoading: true,
   errmsg: null,
   Leaders: []  }, action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading:false, errmsg: null, Leaders: action.payload };
        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading:true, errmsg: null, Leaders: [] };
        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading:false, errmsg: action.payload , Leaders: [] };
        default: 
            return state;
    }
}