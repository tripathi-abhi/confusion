import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'dishes')
    .then(response => response.json())
    .then(Dishes => dispatch(addDishes(Dishes)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
});

export const addDishes = (Dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: Dishes
});


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl+'comments')
    .then(response => response.json())
    .then(Comments => dispatch(addComments(Comments)))
}

export const commentsFailed = (errmsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
});

export const addComments = (Comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: Comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl+'promotions')
    .then(response => response.json())
    .then(Promotions => dispatch(addPromos(Promotions)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmsg
});

export const addPromos = (Promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: Promotions
});