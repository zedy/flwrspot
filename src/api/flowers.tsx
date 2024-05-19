// utils
import axiosHandler from '@/utils/axiosHandler';

// fetch all flower listings from api endpoint
const getAllFlowers = (page) => {
  const { pageParam } = page;

  return axiosHandler({
    url: `${import.meta.env.VITE_FLOWERS_API_URL}/flowers?page=${
      pageParam || 0
    }`,
    method: 'GET',
  });
};

// fetch all flower listings from api endpoint
const createFlower = () =>
  axiosHandler({
    url: `${import.meta.env.VITE_FLOWERS_API_URL}/flowers`,
    method: 'POST',
  });

export { getAllFlowers, createFlower };
