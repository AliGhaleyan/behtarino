import { ProductService } from "../../service/product.service";
import { ProductAction } from "./action";
import { call, put, takeLatest } from "redux-saga/effects";
import { Product } from "../../model/product.model";

function *findProduct({ id }: ProductAction.Find) {
    const { find } = new ProductService();
    const product: Product = yield call(find, id);
    
    yield put(ProductAction.findResult(product));
}

export function* watchProduct() {
    yield takeLatest(ProductAction.FIND, findProduct);
}