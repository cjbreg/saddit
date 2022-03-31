import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class SadditApiClient {
  http: AxiosInstance;

  constructor(axiosConfig: AxiosRequestConfig) {
    this.http = axios.create(axiosConfig);

    this.http.interceptors.request.use(async (requestInterceptor) => {
      return requestInterceptor;
    });
  }

  add401ResponseInterceptor(unauthorizedCallback: any): void {
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { status, config } = error.response;
        if (config.url.includes("login")) {
          return Promise.reject(error);
        }
        if (status === 401) {
          unauthorizedCallback();
        }
        return Promise.reject(error);
      }
    );
  }
}

export default SadditApiClient;
