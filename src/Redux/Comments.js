import  * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errmsg: null,
    Comments: []
    },action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading:false, errmsg: null, Comments: action.payload };
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading:false, errmsg: action.payload , Comments: [] };
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.Comments.length;
            comment.date= new Date().toISOString();
            return {...state, Comments : state.Comments.concat(comment)};
        default:
            return state;
    }
}