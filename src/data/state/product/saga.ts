import { ProductService } from "../../service/product.service";
import { ProductAction } from "./action";
import { call, put, takeLatest } from "redux-saga/effects";

function* findProduct({ id }: ProductAction.Find) {
    const { find } = new ProductService();
    const product = yield call(find, id);
    
    yield put(ProductAction.findResult(product));
}

export function* watchProduct() {
    yield takeLatest(ProductAction.FIND, findProduct);
}