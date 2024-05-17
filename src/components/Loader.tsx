// components
import FlexWrapper from '@/components/elements/FlexWrapper';

// A presentational component that shows a loading spinner
export default function Loader() {
  return (
    <FlexWrapper justifyContent="center" alignItems="center" classes="h-full">
      Spinner
    </FlexWrapper>
  );
}
