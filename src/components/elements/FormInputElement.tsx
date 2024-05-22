// libs
import { ChangeHandler, FieldErrors } from 'react-hook-form';
import { get } from 'lodash';
import { forwardRef } from 'react';

// components
import { messageToastError } from '@/utils/helpers';

export enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Number = 'number',
  Hidden = 'hidden',
  Date = 'date',
}

type Props = {
  label: string;
  name: string;
  type: string;
  error: FieldErrors;
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  onFocus?: () => void;
};

/**
 * FormInputElement is component that returns
 * a form input element with a label and error message. It has
 * no state, it's just a simple input element. It does handle showing
 * errors for it's field.
 *
 * @param {Props} { onChange, onBlur, name, label, type, error }
 */
function FormInputElement(
  { onChange, onBlur, name, label, type, error, onFocus }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  const isError = get(error, name) && type !== 'hidden';

  const handleBlur = (e) => {
    onBlur(e);
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
  };

  const handleChange = (e) => {
    onChange(e);
  };

  if (isError) {
    messageToastError(get(error[name], 'message') as string);
  }

  return (
    <div className="w-full">
      <div
        className={`relative mb-[10px] z-1 h-[50px] px-[15px] pt-3 pb-0 bg-field font-ubuntu rounded-sm overflow-hidden border-[1px] ${
          isError ? 'border-red' : 'border-fieldBorder'
        }`}
      >
        <input
          id={name}
          name={name}
          onFocus={handleFocus}
          ref={ref}
          onChange={handleChange}
          onBlur={handleBlur}
          type={type}
          placeholder=" "
          className="z-20 w-full px-0 h-full !bg-transparent text-slate-700 placeholder-transparent
          text-[13px] font-normal appearance-none
          peer focus:outline-none focus:ring-0 focus:border-gray-900"
        />
        <label
          htmlFor={name}
          className="absolute z-10 left-4 top-2 text-slate-400 text-[10px] font-normal transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-3 peer-focus:top-2 peer-focus:text-slate-800 peer-focus:text-[10px]"
        >
          {label}
        </label>
        {/* {get(error, name) && type !== 'hidden' ? (
          <FormError message={get(error[name], 'message') as string} />
        ) : null} */}
      </div>
    </div>
  );
}

export default forwardRef(FormInputElement);
