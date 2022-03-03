import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "redux-saga";
import { ProductState } from "./product/reducer";
import { rootReducer } from "./reducer";
import rootSaga from "./saga";
import { createWrapper, Context, HYDRATE, MakeStore } from 'next-redux-wrapper';

export interface AppState {
    product?: ProductState
}

interface WrapperState extends Store, AppState {}

export interface SagaStore {
    sagaTask?: Task;
}

const makeStore: MakeStore<WrapperState> = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<Store<AppState>>(makeStore, { debug: true });