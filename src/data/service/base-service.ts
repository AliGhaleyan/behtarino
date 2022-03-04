import axios from "axios";

export default class BaseService {
    readonly request = <T>(path: string, options: object | null = {}): Promise<T> => {
        options = options ?? {};
        const request = axios.request({ url: `${process.env.API_URL}/${path}` })
            .then(res => res?.data);

        return request;
    };

    protected readonly get = <T>(path: string): Promise<T> => {
        return this.request<T>(path, null);
    };

    readonly post = <T>(path: string, data: any = null): Promise<T> => {
        return this.request<T>(path, { data, method: 'POST' });
    };

    readonly delete = <T>(path: string, data: any = null): Promise<T> => {
        return this.request(path, { data, method: 'DELETE' });
    };

    readonly put = <T>(path: string, data: any = null): Promise<T> => {
        return this.request<T>(path, { data, method: 'PUT' });
    };

}
