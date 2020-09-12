import { DISHES } from '../Shared/dishes';
import { PROMOTIONS } from '../Shared/promotions';
import { LEADERS } from '../Shared/leaders';
import { COMMENTS } from '../Shared/comments';

export const initialState = {
    Dishes : DISHES,
    Promotions: PROMOTIONS,
    Leaders: LEADERS,
    Comments: COMMENTS,
}

export const Reducer = (state=initialState,action) => {
    return state;
}