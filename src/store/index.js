import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { quizReducer } from './quizReducer';

const rootReducer = combineReducers({
    quiz: quizReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
