// components
import FlexWrapper from './FlexWrapper';
import Typography, { Type } from './Typography';

type Props = {
  image: string;
};

// Component
export default function Hero({ image }: Props) {
  return (
    <section className="w-full h-full flex justify-center items-center flex-col relative mb-[70px]">
      <FlexWrapper flexDirection="col" classes="absolute" alignItems="center">
        <Typography component={Type.H1} classes="text-main-0">
          Discover flowers around you
        </Typography>
        <Typography component={Type.H4} classes="text-main-0">
          Explore between more than 8.427 sightings
        </Typography>
      </FlexWrapper>
      <img src={image} alt="hero-flower" />
    </section>
  );
}
