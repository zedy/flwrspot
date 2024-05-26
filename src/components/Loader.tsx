// libs
import { LoadingOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';

/**
 * A simple presentational component that shows a loading/spinner
 *
 * @returns JSX
 */
export default function Loader() {
  return (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      flexDirection="col"
      className="absolute h-full bg-slate-100 opacity-50 z-50 top-0 left-0"
    >
      <LoadingOutlined style={{ fontSize: '50px', color: '#000' }} />
    </FlexWrapper>
  );
}
