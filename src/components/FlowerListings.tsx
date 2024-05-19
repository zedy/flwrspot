// libs
import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

// components
import FlowerListingItem from './FlowerListingItem';
import GridWrapper from './elements/GridWrapper';

// api
import { getAllFlowers } from '@/api/flowers';

// types
import { FlowerProps } from '@/types/flowers';

function FlowerListings() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery(
    ['flowerListings'],
    async (page) => getAllFlowers(page),
    {
      getNextPageParam: (lastPage) => {
        console.log('lastpages', lastPage);

        return lastPage.meta.pagination.next_page;
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  // there was no need to implemnet any suspense / loading components
  // as even on Fast 3G network throttling the load times were perfectly acceptable
  if (isFetching) {
    console.log('isFetching');
  }

  if (isLoading) {
    console.log('isLoading');
  }

  return (
    <GridWrapper>
      {data &&
        data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.flowers.map((flower) => {
              return (
                <FlowerListingItem
                  key={flower.id}
                  data={flower as FlowerProps}
                />
              );
            })}
          </React.Fragment>
        ))}
      <span ref={ref} />
    </GridWrapper>
  );
}

export default React.memo(FlowerListings);
