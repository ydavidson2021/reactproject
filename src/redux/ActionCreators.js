import * as ActionTypes from './ActionTypes';
import { SWEETS } from '../shared/sweets';

export const fetchSweets = () => dispatch => {

    dispatch(sweetsLoading());

    setTimeout(() => {
        dispatch(addSweets(Sweets));
    }, 2000);
};

export const sweetsLoading = () => ({
    type: ActionTypes.SWEETS_LOADING
});

export const sweetsFailed = errMess => ({
    type: ActionTypes.SWEETS_FAILED,
    payload: errMess
});

export const addSweets = sweets => ({
    type: ActionTypes.ADD_SWEETS,
    payload: sweets
});

export const addComment = (sweetId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        sweetId: sweetId,
        rating: rating,
        author: author,
        text: text
    }
});


