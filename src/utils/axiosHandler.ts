import axios, { type AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

type ConfigProperties = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  requestConfig?: object;
};

export default async function axiosHandler(configObject: ConfigProperties) {
  const { method, url, requestConfig = {} } = configObject;
  const controller = new AbortController();

  try {
    const response = await axiosInstance[method.toLowerCase()](url, {
      ...requestConfig,
      signal: controller.signal,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }

  return () => controller.abort();
}
