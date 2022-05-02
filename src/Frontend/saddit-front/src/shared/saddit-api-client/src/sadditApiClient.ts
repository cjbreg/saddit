import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import PostClient from "./post/postClient";
import UserClient from "./user/userClient";

class SadditApiClient {
  http: AxiosInstance;

  user: UserClient;
  post: PostClient;

  constructor(axiosConfig: AxiosRequestConfig) {
    this.http = axios.create(axiosConfig);

    this.http.interceptors.request.use(async (requestInterceptor) => {
      requestInterceptor.headers!["Access-Control-Allow-Origin"] = `*`;
      requestInterceptor.headers![
        "Access-Control-Allow-Methods"
      ] = `GET, POST, PATCH, PUT, DELETE, OPTIONS`;
      requestInterceptor.headers![
        "Access-Control-Allow-Headers"
      ] = `Origin, Content-Type, X-Auth-Token, Authorization, X-Requested-With`;
      return requestInterceptor;
    });

    this.user = new UserClient(this.http);
    this.post = new PostClient(this.http);
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
