// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';

type Props = {
  image: string;
  headline: string;
  subtext: string;
};

/**
 * Simple presentational component for displaying the Hero banner and it's contents
 *
 * @params Props
 * @returns
 */
export default function Hero({ image, headline, subtext }: Props) {
  return (
    <section className="w-full h-full flex justify-center items-center flex-col relative mb-[70px]">
      <FlexWrapper flexDirection="col" className="absolute" alignItems="center">
        <Typography component={Type.H1} className="text-main-0">
          {headline}
        </Typography>
        <Typography component={Type.H4} className="text-main-25">
          {subtext}
        </Typography>
      </FlexWrapper>
      <img src={image} alt="hero-flower" />
    </section>
  );
}
