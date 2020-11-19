import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers/usersReducer';
import { watchUsers } from './sagas';

const composeEnhancers =
    process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    null || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchUsers);