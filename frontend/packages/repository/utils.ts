import { AxiosResponse } from "axios";

export async function formatResponse<T = any, D = any>(
  response: Promise<AxiosResponse<T, D>>
) {
  const { headers, request, config, ...rest } = await response;
  return rest;
}
