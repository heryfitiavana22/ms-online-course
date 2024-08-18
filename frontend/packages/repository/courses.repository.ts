import { axiosInstance } from ".";
import { formatResponse } from "./utils";
import { Course } from "data-type";

export class CoursesRepository {
  static find() {
    return formatResponse<Course[]>(axiosInstance.get("/courses"));
  }

  static findById(id: string) {
    return formatResponse<Course>(axiosInstance.get(`/courses/${id}`));
  }

  static create(data: Course) {
    return formatResponse<Course>(axiosInstance.post("/courses", data));
  }

  static update(id: string, data: Partial<Course>) {
    return formatResponse<Course>(axiosInstance.put(`/courses/${id}`, data));
  }

  static delete(id: string) {
    return formatResponse<Course>(axiosInstance.delete(`/courses/${id}`));
  }
}
