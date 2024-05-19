// libs
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import axiosHandler from '@/utils/axiosHandler';
import FlowerListingItem from './FlowerListingItem';
import GridWrapper from './elements/GridWrapper';

// types
import { FlowerProps } from '@/types/flowers';

function FlowerListings() {
  const { data } = useQuery({
    queryFn: () =>
      axiosHandler({
        url: `${import.meta.env.VITE_FLOWERS_API_URL}/flowers`,
        method: 'GET',
      }),
    queryKey: ['flowerListings'],
    enabled: true,
    retry: false,
    select: (response) => response.flowers as FlowerProps[],
    placeholderData: '... todo',
  });

  return (
    <GridWrapper>
      {data &&
        data.map((flower) => {
          return (
            <FlowerListingItem key={flower.id} data={flower as FlowerProps} />
          );
        })}
    </GridWrapper>
  );
}

export default React.memo(FlowerListings);
