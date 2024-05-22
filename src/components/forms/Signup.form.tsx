/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';

// components
import FormInputElement, {
  InputType,
} from '@/components/elements/FormInputElement';
import Button from '@/components/elements/Button';
import FlexWrapper from '@/components/elements/FlexWrapper';
import Divider from '@/components/elements/Divider';
import DatePicker from '../elements/DatePicker';
// import { SocialLoginProps } from '@/types/auth';

// types
import { Value } from '@/types/date';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const DEFAULT_ERR_MSG = 'is a required field';

/**
 * We could separate the schemaValidation into a separate file
 * and import it here. This would make the code more modular, but
 * this is such a small form that it's not necessary.
 */
const schemaValidation = yup
  .object({
    firstName: yup
      .string()
      .required(`First name ${DEFAULT_ERR_MSG}`)
      .min(3)
      .max(32),
    lastName: yup
      .string()
      .required(`Last name ${DEFAULT_ERR_MSG}`)
      .min(3)
      .max(32),
    dob: yup.string().required(`Date ${DEFAULT_ERR_MSG}`),
    signupEmail: yup
      .string()
      .email()
      .required(`Email ${DEFAULT_ERR_MSG}`)
      .min(8)
      .max(64),
    signupPassword: yup
      .string()
      .required(`Password ${DEFAULT_ERR_MSG}`)
      .min(8)
      .max(16)
      .trim()
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    passwordVerify: yup
      .string()
      .required(`Password verify ${DEFAULT_ERR_MSG}`)
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

type SocialLoginProps = {
  mutationCallback: any;
};

export default function SignupForm({ mutationCallback }: SocialLoginProps) {
  const [dob, setDob] = useState<Date | ''>('');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

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
    try {
      mutationCallback({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.signupEmail,
        password: formData.signupPassword,
        date_of_birth: dob,
      });
    } catch (err: unknown) {
      toast.error('User creation encountered an error');
    }
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <FlexWrapper flexDirection="col" classes="sm:flex-row">
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
        <FlexWrapper flexDirection="col" classes="sm:flex-row">
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
        <Button type="submit" className="w-full !rounded mt-5">
          Create Account
        </Button>
      </form>
    </FlexWrapper>
  );
}
