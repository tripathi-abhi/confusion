import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment,
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl+'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response=>{
        if(response.ok){
            return response;
        }
        else {
            var error = new Error(`Error ${response.status} : ${response.statusText}`)
            error.response=response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log(`Post Comments ${error.message}`)
     alert("Your comment could not be posted "+error.message)});

}


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'dishes')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else {
            var error = new Error(`Error ${response.status} : ${response.statusText}`)
            error.response=response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(Dishes => dispatch(addDishes(Dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response=>{
        if(response.ok){
            return response;
        }
        else {
            var error = new Error(`Error ${response.status} : ${response.statusText}`)
            error.response=response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(Comments => dispatch(addComments(Comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response=>{
        if(response.ok){
            return response;
        }
        else {
            var error = new Error(`Error ${response.status} : ${response.statusText}`)
            error.response=response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(Promotions => dispatch(addPromos(Promotions)))
    .catch(error => dispatch(promosFailed(error.message)));
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