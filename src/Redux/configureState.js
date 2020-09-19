import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Leaders } from './Leaders';
import { Promotions } from './Promotions';
import { createStore, combineReducers} from 'redux';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Dishes: Dishes,
            Comments: Comments,
            Leaders: Leaders,
            Promotions: Promotions
        })
    );
    return store;
}