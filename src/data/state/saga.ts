import { all } from "redux-saga/effects";
import { watchProduct } from "./product/saga";

export default function* rootSaga() {
    yield all([
        watchProduct(),
    ]);
}