import axios from "axios";
import { CANCEL } from "redux-saga";

export default class BaseService {
    readonly request = <T>(path: string, options: object | null = {}, cancellable: boolean = true): Promise<T> => {
        const source = axios.CancelToken.source();
        options = options ?? {};
        const request = axios.request({ url: `${process.env.API_URL}/${path}` })
            .then(res => res?.data);

        if (cancellable)
            request[CANCEL] = () => source.cancel();

        return request;
    };

    protected readonly get = <T>(path: string, cancellable: boolean = true): Promise<T> => {
        return this.request<T>(path, null, cancellable);
    };

    readonly post = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.request<T>(path, { data, method: 'POST' }, cancellable);
    };

    readonly delete = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.request(path, { data, method: 'DELETE' }, cancellable);
    };

    readonly put = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.request<T>(path, { data, method: 'PUT' }, cancellable);
    };

}
