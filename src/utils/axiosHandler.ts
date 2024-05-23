// libs
import axios from 'axios';

export type Data = Record<string, string | number>;

export type ResponseObject = {
  data: any;
};

const apiHandler = async (data: Data, url: string, method?: string) => {
  const response: ResponseObject = await axios({
    url,
    baseURL: import.meta.env.VITE_FLOWERS_API_URL as string,
    data,
    method: method || 'POST',
    // withCredentials: true,
    headers: {
      // Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return response.data;
};

export default apiHandler;
