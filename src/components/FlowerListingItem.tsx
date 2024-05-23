// libs
import React from 'react';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Button from '@/components/elements/Button';

// types
import { FlowerProps } from '@/types/flowers';

// assets
import star from '@/assets/star.svg';
import Typography, { Type } from './elements/Typography';

type Props = {
  data: FlowerProps;
};

/**
 * Simple presentational components for displaying individual listing items
 * from the `api/v1/flowers` endpoint.
 *
 * @param param0 FlowerProps
 * @returns
 */
function FlowerListingItem({ data }: Props) {
  const { id, latin_name, name, favorite, profile_picture, sightings } = data;
  // TODO hook favorite into auth workflow
  return (
    <FlexWrapper
      flexDirection="col"
      classes="h-[350px] relative rounded-md overflow-hidden"
    >
      <Button
        version="icon-only"
        icon={<img src={star} alt="favorite" />}
        className="z-10 absolute top-5 right-5"
      />
      <FlexWrapper
        alignItems="center"
        flexDirection="col"
        classes="absolute bottom-5 z-10"
      >
        <Typography component={Type.H4} classes="font-ubuntu text-main-0">
          {name}
        </Typography>
        <Typography
          component={Type.SPAN}
          classes="italic	font-ubuntu text-xs text-main-25"
        >
          {latin_name}
        </Typography>
        <Typography
          component={Type.SPAN}
          classes="mt-5 bg-main-100 bg-opacity-50 rounded-full text-xs font-ubuntu text-main-0 py-[8px] px-[12px]"
        >
          {sightings} sightings
        </Typography>
      </FlexWrapper>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-main-100 to-transparent opacity-50" />
      <img
        src={profile_picture}
        alt="flower"
        className="object-cover h-full w-full"
      />
    </FlexWrapper>
  );
}

export default React.memo(FlowerListingItem);
