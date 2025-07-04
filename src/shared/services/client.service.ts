import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { ACCESS_TOKEN_COOKIE_NAME, BASE_API_URL } from "@/shared/lib/app";
import { AnyObject } from "@/shared/lib/types";
import CookieService from "@/shared/services/cookie.service";

const defaultBaseURL = BASE_API_URL;

class ClientService {
  private static axiosInstance: AxiosInstance = axios.create({});

  private static handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private static handleError(error: AxiosError): Promise<never> {
    console.error("API request failed:", error);
    return Promise.reject(error);
  }

  private static isURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  private static async getAuthHeader() {
    let accessToken = "";

    accessToken = CookieService.get(ACCESS_TOKEN_COOKIE_NAME);

    if (accessToken) {
      return {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
    }

    return {};
  }

  private static async mergeConfigs(config?: AxiosRequestConfig) {
    const accessTokenHeader = await ClientService.getAuthHeader();

    const headers = new AxiosHeaders({
      ...accessTokenHeader.headers,
      ...config?.headers,
    });

    const mergedConfigs = {
      ...config,
      headers,
    };

    return mergedConfigs;
  }

  private static requestInterceptor() {
    ClientService.axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig | any) => {
        const accessTokenHeader = await ClientService.getAuthHeader();

        if (accessTokenHeader.headers) {
          config.headers["Authorization"] =
            accessTokenHeader.headers.Authorization;
        }

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  private static responseInterceptor() {
    ClientService.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  public static initialize() {
    ClientService.requestInterceptor();
    ClientService.responseInterceptor();
  }

  public static async get<T>(url: string, params?: AnyObject): Promise<T> {
    const requestURL = ClientService.isURL(url)
      ? url
      : `${defaultBaseURL}/${url}`;

    const config = await ClientService.mergeConfigs(params);

    return ClientService.axiosInstance
      .get<T>(requestURL, config)
      .then(ClientService.handleResponse)
      .catch(ClientService.handleError);
  }

  public static async post<T>(
    url: string,
    data?: unknown,
    options?: AxiosRequestConfig<unknown>
  ): Promise<T> {
    const requestURL = ClientService.isURL(url)
      ? url
      : `${defaultBaseURL}/${url}`;
    const config = await ClientService.mergeConfigs(options);

    return ClientService.axiosInstance
      .post<T>(requestURL, data, config)
      .then(ClientService.handleResponse)
      .catch(ClientService.handleError);
  }

  public static async put<T>(
    url: string,
    data?: unknown,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const requestURL = ClientService.isURL(url)
      ? url
      : `${defaultBaseURL}/${url}`;

    const config = await ClientService.mergeConfigs(options);

    return ClientService.axiosInstance
      .put<T>(requestURL, data, config)
      .then(ClientService.handleResponse)
      .catch(ClientService.handleError);
  }

  public static async patch<T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const requestURL = ClientService.isURL(url)
      ? url
      : `${defaultBaseURL}/${url}`;
    const config = await ClientService.mergeConfigs(options);

    return ClientService.axiosInstance
      .patch<T>(requestURL, data, config)
      .then(ClientService.handleResponse)
      .catch(ClientService.handleError);
  }

  public static async del<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const requestURL = ClientService.isURL(url)
      ? url
      : `${defaultBaseURL}/${url}`;

    const config = await ClientService.mergeConfigs(options);

    return ClientService.axiosInstance
      .delete<T>(requestURL, config)
      .then(ClientService.handleResponse)
      .catch(ClientService.handleError);
  }
}

export default ClientService;
