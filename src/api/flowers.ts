// libs
import { QueryFunctionContext } from '@tanstack/react-query';

// utils
import apiHandler from '@/utils/axiosHandler';

// fetch all flower listings from api endpoint
const getAllFlowers = (page: QueryFunctionContext<string[], any>) => {
  const { pageParam } = page;

  return apiHandler({}, `/flowers?page=${pageParam || 0}`, 'GET');
};

// fetch all flower listings from api endpoint
const createFlower = () => apiHandler({}, '/flowers', 'POST');

export { getAllFlowers, createFlower };
