import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export { store };