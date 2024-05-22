// libs
import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

// components
import FlowerListingItem from '@/components/FlowerListingItem';
import GridWrapper from '@/components/elements/GridWrapper';
import Placeholder from './Placeholder';

// api
import { getAllFlowers } from '@/api/flowers';

// types
import { FlowerProps } from '@/types/flowers';

/**
 * A functional component that consumes the `api/v1/flowers` endpoint and displays
 * the first page.
 *
 * On scroll we hit the 'ref' element at the botton and use that to trigger (via an observer pattern)
 * the `fetchNextPage` fn from react query to load the next page.
 *
 * @returns JSX.Element
 */
function FlowerListings() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    ['flowerListings'],
    async (page) => getAllFlowers(page),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.meta.pagination.next_page;
      },
    }
  );
console.log(data);
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const ShowPlaceholders = () => {
    return Array.from({ length: 4 }, (_, index) => index).map((i) => (
      <Placeholder key={i} />
    ));
  };

  return (
    <GridWrapper>
      {isLoading && <ShowPlaceholders />}
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
