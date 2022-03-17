import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducer';

const middlewares = [];

export const store = createStore(reducers, applyMiddleware(...middlewares));
