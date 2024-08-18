import { axiosInstance } from ".";
import { formatResponse } from "./utils";

export class StudentRepository {
  static find() {
    return formatResponse(axiosInstance.get("/students"));
  }
}
