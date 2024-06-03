/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UseMutateFunction } from '@tanstack/react-query';
import dayjs from 'dayjs';

// components
import FormInputElement, {
  InputType,
} from '@/components/elements/FormInputElement';
import Button from '@/components/elements/Button';
import FlexWrapper from '@/components/elements/FlexWrapper';
import Divider from '@/components/elements/Divider';
import DatePicker from '../elements/DatePicker';
import { ModalContext } from '@/context/ModalContext';

// types
import { Value } from '@/types/date';

// utils
import { formErrorMessages } from '@/utils/helpers';
import { RegisterData } from '@/api/auth';

const { required, min3, min8, max16, max32, max64 } = formErrorMessages();

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

/**
 * We could separate the schemaValidation into a separate file
 * and import it here. This would make the code more modular, but
 * this is such a small form that it's not necessary.
 */
const schemaValidation = yup
  .object({
    firstName: yup
      .string()
      .trim()
      .required(required)
      .min(3, min3)
      .max(32, max32),
    lastName: yup
      .string()
      .trim()
      .required(required)
      .min(3, min3)
      .max(32, max32),
    dob: yup.string().required(required),
    signupEmail: yup
      .string()
      .email()
      .trim()
      .required(required)
      .min(8, min8)
      .max(64, max64),
    signupPassword: yup
      .string()
      .trim()
      .required(required)
      .min(8, min8)
      .max(16, max16)
      .trim()
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    passwordVerify: yup
      .string()
      .trim()
      .required(required)
      .oneOf([yup.ref('signupPassword')], 'Passwords must match'),
  })
  .required();

type FormData = {
  firstName: string;
  lastName: string;
  signupEmail: string;
  signupPassword: string;
  passwordVerify: string;
  dob: string;
};

type Props = {
  mutationCallback: UseMutateFunction<any, unknown, RegisterData, unknown>;
};

/**
 * The main component we use to handle the signup process elements.
 *
 * @param {Object} props - The component props.
 * @param {Function} mutationCallback - A callback function which takes in params in for of RegisterData.
 * @returns {JSX.Element} - The rendered component.
 */
export default function SignupForm({ mutationCallback }: Props) {
  const [dob, setDob] = useState<Date | ''>('');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const { setShowLoader } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (formData: FormData) => {
    setShowLoader(true);
    mutationCallback({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.signupEmail,
      password: formData.signupPassword,
      date_of_birth: dob as string,
    });
  };

  const handleDatePick = (value: Value) => {
    const date = dayjs(value as Date);

    setDob(date.toDate());
    setValue('dob', date.format('MMM DD, YYYY'));
    setShowCalendar(false);
    clearErrors('dob');
  };

  const handleOnDobFocus = () => {
    setShowCalendar(true);
  };

  const handleDobBlur = () => {
    setTimeout(() => {
      setShowCalendar(false);
    }, 100);
  };

  return (
    <FlexWrapper flexDirection="col">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form w-full">
        <FlexWrapper flexDirection="col" className="sm:flex-row">
          <FormInputElement
            label="First name"
            type={InputType.Text}
            error={errors}
            {...register('firstName', { required: true })}
          />
          <Divider className="mr-3" />
          <FormInputElement
            label="Last name"
            type={InputType.Text}
            error={errors}
            {...register('lastName', {
              required: true,
            })}
          />
        </FlexWrapper>
        <DatePicker
          onChangeCallback={handleDatePick}
          visible={showCalendar}
          input={
            <FormInputElement
              label="Dob"
              type={InputType.Text}
              error={errors}
              onFocus={handleOnDobFocus}
              {...register('dob', { required: true, onBlur: handleDobBlur })}
            />
          }
        />
        <FormInputElement
          label="Email"
          type={InputType.Email}
          error={errors}
          {...register('signupEmail', { required: true })}
        />
        <FlexWrapper flexDirection="col" className="sm:flex-row">
          <FormInputElement
            label="Password"
            type={InputType.Password}
            error={errors}
            {...register('signupPassword', { required: true })}
          />
          <Divider className="mr-3" />
          <FormInputElement
            label="Password verify"
            type={InputType.Password}
            error={errors}
            {...register('passwordVerify', { required: true })}
          />
        </FlexWrapper>
        <Button version="modal-cta" type="submit" className="w-full mt-5">
          Create Account
        </Button>
      </form>
    </FlexWrapper>
  );
}
