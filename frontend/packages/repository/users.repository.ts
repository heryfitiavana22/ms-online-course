import { axiosInstance } from ".";
import { formatResponse } from "./utils";

export class UsersRepository {
  static me() {
    return formatResponse(axiosInstance.get("/users/me"));
  }
}
