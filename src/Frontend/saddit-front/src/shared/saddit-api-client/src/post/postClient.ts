import { AxiosResponse } from "axios";
import HttpService from "../httpService";

interface PostRequest {
  fetchPosts(): Promise<AxiosResponse<any>>;
  submitPost(
    username: string,
    userId: number,
    content: string,
    subSadditName: string
  ): Promise<AxiosResponse<any>>;
}

class PostClient extends HttpService implements PostRequest {
  fetchPosts = (): Promise<AxiosResponse<any, any>> => {
    return this.get("post/new");
  };

  fetchSubSadditPosts = (subName: string): Promise<AxiosResponse<any, any>> => {
    return this.get(`post/subsaddit/${subName}`);
  };

  submitPost = (
    username: string,
    userId: number,
    content: string,
    subSadditName: string
  ): Promise<AxiosResponse<any, any>> => {
    return this.post("post", { username, userId, content, subSadditName });
  };
}
export default PostClient;
