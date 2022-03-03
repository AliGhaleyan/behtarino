import axios, { AxiosInstance } from "axios";

export default class BaseService {
    public axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({baseURL: process.env.API_SERIVEC});
    }

    readonly request = <T>(path: string, options: object | null = {}, cancellable: boolean = true): Promise<T> => {
        const source = axios.CancelToken.source();
        options = options ?? {};
        const request = this.axios.request({url: path});
        
        if (cancellable)
            request[CANCEL] = () => source.cancel();

        return request;
    };

    protected readonly get = <T>(path: string, cancellable: boolean = true): Promise<T> => {
        return this.request<T>(path, null, cancellable);
    };

    readonly post = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.request<T>(path, {data, method: 'POST'}, cancellable);
    };

    readonly delete = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.request(path, {data, method: 'DELETE'}, cancellable);
    };

    readonly put = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.request<T>(path, {data, method: 'PUT'}, cancellable);
    };

}
