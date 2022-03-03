import { Product } from "../model/product.model";
import BaseService from "./base-service";

export class ProductService extends BaseService {
    readonly find = (id: number): Promise<Product> => {
        return this.get(`products/${id}`);
    }
}
