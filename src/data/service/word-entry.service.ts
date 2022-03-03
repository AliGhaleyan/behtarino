import { Product } from "../model/product.model";
import BaseService from "./base-service";

export class WordEntryService extends BaseService {
    readonly find = (id: number): Promise<Product> => {
        return this.get(`products/${id}`);
    }
}
