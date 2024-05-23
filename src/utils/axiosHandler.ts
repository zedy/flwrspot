// libs
import axios from 'axios';
import { set } from 'lodash';

export type Data = Record<string, string | number>;

export type ResponseObject = {
  data: any;
};

const apiHandler = async (
  data: Data,
  url: string,
  method?: string,
  token?: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (token) set(headers, 'Authorization', `Bearer ${token}`);

    const response: ResponseObject = await axios({
      url,
      baseURL: import.meta.env.VITE_FLOWERS_API_URL as string,
      data,
      method: method || 'POST',
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error('Oops!');
  }
};

export default apiHandler;
