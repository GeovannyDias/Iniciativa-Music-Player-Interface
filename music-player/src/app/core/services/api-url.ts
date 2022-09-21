import { environment } from "src/environments/environment";
import { ENDPOINTS } from "../config/endpoints";

export const getApiUrl = (endpoint: string) => {
    const url = environment.baseUrlApi + ENDPOINTS.APPLICATION_CONTEXT + endpoint;
    return url;
}