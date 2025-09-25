import axios from 'axios';

import { AuthService } from '@shared/api/auth';
import { useSessionStore } from '@shared/lib/session';

const BASE_URL = 'https://api.zendu.io/v1';

export const zenduApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const freeAuthEndpoints = ['/auth/sign-in'];

zenduApi.interceptors.request.use((config) => {
  const accessToken = useSessionStore.use.session()?.accessToken;

  if (accessToken && !freeAuthEndpoints.includes(config.url || '')) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

zenduApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshSessionToken = useSessionStore.use.refreshSessionToken();
      const resetSession = useSessionStore.use.resetSession();

      try {
        const { data } = await AuthService.refreshToken();

        refreshSessionToken(data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return zenduApi(originalRequest);
      } catch {
        resetSession();
      }
    }

    return Promise.reject(error);
  }
);
