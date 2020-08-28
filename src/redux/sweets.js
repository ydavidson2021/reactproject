import * as ActionTypes from './ActionTypes';

export const Sweets = (state = {
        isLoading: true,
        errMess: null,
        sweets: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SWEETS:
            return {...state, isLoading: false, errMess: null, sweets: action.payload};
        case ActionTypes.SWEETS_LOADING:
            return {...state, isLoading: true, errMess: null, sweets: []};
        case ActionTypes.SWEETS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};