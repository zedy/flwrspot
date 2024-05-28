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
    <section
      className={`w-full flex justify-center items-center flex-col relative mb-10 xl:mb-[70px] h-[500px] ${image}`}
    >
      <FlexWrapper flexDirection="col" className="absolute" alignItems="center">
        <Typography
          component={Type.H1}
          className="text-main-0 font-light md:font-semibold text-center mb-[15px] xl:mb-[25px]"
        >
          {headline}
        </Typography>
        <Typography
          component={Type.H4}
          className="text-main-25 text-center font-light md:font-regular text-base"
        >
          {subtext}
        </Typography>
      </FlexWrapper>
    </section>
  );
}
