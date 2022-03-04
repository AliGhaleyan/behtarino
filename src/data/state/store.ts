import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "redux-saga";
import { rootReducer } from "./reducer";
import rootSaga from "./saga";

export interface AppState {
    server: any;
}

export interface SagaStore {
    sagaTask?: Task;
}

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<Store<AppState>>(makeStore, { debug: false });