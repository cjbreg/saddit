import { AxiosResponse } from "axios";
import HttpService from "../httpService";

interface PostRequest {
  fetchPosts(): Promise<AxiosResponse<any>>;
}

class PostClient extends HttpService implements PostRequest {
  fetchPosts = (): Promise<AxiosResponse<any, any>> => {
    return this.get("post");
  };
}
export default PostClient;
