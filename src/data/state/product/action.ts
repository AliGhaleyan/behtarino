import { Product } from "../../model/product.model";

export namespace ProductAction {
    export const FIND = "product/find";
    export const FIND_RESULT = "product/find/result";

    export interface Find {
        type: typeof FIND,
        id: number
    }

    export interface FindResult {
        type: typeof FIND_RESULT,
        product: Product
    }

    export const find = (id: number): Find => ({type: FIND, id});

    export const findResult = (product: Product): FindResult => ({type: FIND_RESULT, product});

    export type Types = Find | FindResult;
}