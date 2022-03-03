import produce from "immer";
import { Product } from "../../model/product.model";
import { ProductAction } from "./action";

export interface ProductState {
    payload?: Product
}

const initialState: ProductState = {};

export const productReducer = produce(handler, initialState);

function handler(draft: ProductState, action: ProductAction.Types) {
    switch (action.type) {
        case ProductAction.FIND_RESULT:            
            draft.payload = action.product;
            break;
    }
}