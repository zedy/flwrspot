// utils
import apiHandler from '@/utils/axiosHandler';

export type RegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export async function registerUserApi(data: RegisterData) {
  return apiHandler(data, '/users/register');
}

export async function loginUserApi(data: LoginData) {
  return apiHandler(data, '/users/login');
}

export async function fetchUserApi(token: string) {
  return apiHandler({}, '/users/me', 'GET', token);
}
