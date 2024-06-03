// libs
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';

// types
import { Value } from '@/types/date';

export type Props = {
  onChangeCallback: (value: Value) => void;
  input: React.ReactNode;
  visible?: boolean;
};

/**
 * A functional component that renders an input element and a calendar.
 * The calendar is shown conditionally based on the `visible` prop.
 *
 * @param {Object} props - The component props.
 * @param {Function} onChangeCallback - Callback function to handle date changes.
 * @param {React.ReactNode} input - The input element to be rendered.
 * @param {boolean} visible - Whether the calendar is visible.
 * @returns {JSX.Element} A FlexWrapper component containing the input and conditionally rendered calendar.
 */
export default function DatePicker({
  onChangeCallback,
  input,
  visible,
}: Props) {
  const [startDate, setStartDate] = useState<Value>(new Date());

  const handleOnChange = (e: Value) => {
    onChangeCallback(e);
    setStartDate(e);
  };

  return (
    <FlexWrapper flexDirection="col" className="relative">
      {input}
      {visible && (
        <Calendar
          className="absolute top-14 z-20 w-full"
          onChange={handleOnChange}
          value={startDate}
        />
      )}
    </FlexWrapper>
  );
}
