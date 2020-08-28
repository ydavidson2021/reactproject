import { createStore, combineReducers } from 'redux';
import { Sweets } from './sweets';
import { Comments } from './comments';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sweets: Sweets,
            comments: Comments,
        })
    );

    return store;
};