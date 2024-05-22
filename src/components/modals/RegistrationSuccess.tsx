// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';
import Button from '@/components/elements/Button';

/**
 *
 * @returns JSX
 */
export default function RegistrationSuccess() {
  return (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      flexDirection="col"
    >
      <Typography component={Type.SPAN}>
        Congratulations! You have successfully logged into FlowrSpot!
      </Typography>
      <Button className="mt-5" onClick={() => console.log('')}>
        Ok
      </Button>
    </FlexWrapper>
  );
}
