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
 * A custom datepicker component that utiliazes the react-calendar lib.
 *
 * @param Props
 * @returns JSX
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
    <FlexWrapper flexDirection="col" classes="relative">
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
