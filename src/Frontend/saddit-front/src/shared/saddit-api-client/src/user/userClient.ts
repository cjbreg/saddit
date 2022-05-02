import { AxiosResponse } from "axios";
import HttpService from "../httpService";

interface UserRequests {
  registerUser(
    email: string,
    username: string,
    uid: string
  ): Promise<AxiosResponse<any>>;
  registerUser(
    email: string,
    username: string,
    uid: string,
    id: number
  ): Promise<AxiosResponse<any>>;
  fetchUsers(): Promise<AxiosResponse<any>>;
  fetchUserByUid(uid: string): Promise<AxiosResponse<any>>;
}
class UserClient extends HttpService implements UserRequests {
  registerUser = (
    email: string,
    username: string,
    uid: string
  ): Promise<AxiosResponse<any>> => {
    return this.post("user", { email, username, uid });
  };

  updateUser = (
    email: string,
    username: string,
    uid: string,
    id: number
  ): Promise<AxiosResponse<any>> => {
    return this.post("user", { email, username, uid, id });
  };

  fetchUsers = (): Promise<AxiosResponse<any, any>> => {
    return this.get("user");
  };

  fetchUserByUid = (uid: string): Promise<AxiosResponse<any, any>> => {
    return this.get(`user/uid/${uid}`);
  };
}
export default UserClient;
