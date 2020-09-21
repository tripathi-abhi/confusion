import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Leaders } from './Leaders';
import { Promotions } from './Promotions';
import { createStore, combineReducers} from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Dishes: Dishes,
            Comments: Comments,
            Leaders: Leaders,
            Promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback,
            }),
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}