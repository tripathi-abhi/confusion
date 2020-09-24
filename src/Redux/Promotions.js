import  * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
   isLoading: true,
   errmsg: null,
   Promotions: []  }, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return { ...state, isLoading:false, errmsg: null, Promotions: action.payload };
        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading:true, errmsg: null, Promotions: [] };
        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading:false, errmsg: action.payload , Promotions: [] };
        default:
            return state;
    }
}