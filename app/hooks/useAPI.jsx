import { apiRequest } from "../libs/apiClient";
import { useCallback } from "react";

export default function useAPI() {
  const request = useCallback(() => {
    return apiRequest(method, url, data);
  }, []);

  return { request };
}
