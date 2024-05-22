// utils
import apiHandler from '@/utils/axiosHandler';

type Data = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
};

export default async function registerUserApi(data: Data) {
  return apiHandler(data, '/users/register');
}
