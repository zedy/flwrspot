// libs
import React, { useCallback, useContext } from 'react';
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
        url: 'https://flowrspot-api.herokuapp.com/api/v1/flowers',
        method: 'GET',
      }),
    queryKey: ['flowerListings'],
    enabled: true,
    retry: false,
    select: (response) => response.flowers as FlowerProps[],
    placeholderData: 'PLACEHOLDER-1',
  });

  console.log(data);

  // const handleDispatch = useCallback((name: string) => {
  //   dispatch({
  //     type: "LOCATION_SELECTION",
  //     payload: {
  //       name,
  //     },
  //   });
  // }, []);

  return (
    <GridWrapper>
      {data &&
        data.map((flower) => {
          return <FlowerListingItem key={flower.id} data={flower} />;
        })}
    </GridWrapper>
  );
}

export default React.memo(FlowerListings);
