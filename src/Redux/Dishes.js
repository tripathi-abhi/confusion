import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
   isLoading: true,
   errmsg: null,
   Dishes: []  }, action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading:false, errmsg: null, Dishes: action.payload };
        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading:true, errmsg: null, Dishes: [] };
        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading:false, errmsg: action.payload , Dishes: [] };
        default: 
            return state;
    }
}
