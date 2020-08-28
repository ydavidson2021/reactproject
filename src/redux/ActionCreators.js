import * as ActionTypes from './ActionTypes';

export const addComment = (sweetId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        sweetId: sweetId,
        rating: rating,
        author: author,
        text: text
    }
});


