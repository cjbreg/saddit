import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class HttpService {
  http: AxiosInstance;

  constructor(axiosClient: AxiosInstance) {
    this.http = axiosClient;
  }

  get(endpoint: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<any>> {
    return this.http.get(endpoint, config);
  }

  post(endpoint: string, data = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return this.http.post(endpoint, data, config);
  }

  put(endpoint: string, data = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return this.http.put(endpoint, data, config);
  }

  delete(endpoint: string, config: AxiosRequestConfig = {}): Promise<any> {
    return this.http.delete(endpoint, config);
  }
}
