/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import { UseMutateFunction } from '@tanstack/react-query';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import FormInputElement, {
  InputType,
} from '@/components/elements/FormInputElement';
import Button from '@/components/elements/Button';
import FlexWrapper from '@/components/elements/FlexWrapper';
import { ModalContext } from '@/context/ModalContext';

// utils
import { formErrorMessages } from '@/utils/helpers';
import { LoginData } from '@/api/auth';

const { required } = formErrorMessages();

/**
 * We could separate the schemaValidation into a separate file
 * and import it here. This would make the code more modular, but
 * this is such a small form that it's not necessary.
 */
const schemaValidation = yup
  .object({
    email: yup.string().email().required(required),
    password: yup.string().required(required),
  })
  .required();

type FormData = {
  email: string;
  password: string;
};

type Props = {
  mutationCallback: UseMutateFunction<any, unknown, LoginData, unknown>;
};

/**
 * The main component that we use to handle the login elements and basic logic.
 *
 * @param {Object} props - The component props.
 * @param {Function} mutationCallback - A callback function which takes in params in for of LoginData.
 * @returns {JSX.Element} - The rendered component.
 */
export default function LoginForm({ mutationCallback }: Props) {
  const { setShowLoader } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (formData: FormData) => {
    setShowLoader(true);
    mutationCallback({
      ...formData,
    });
  };

  return (
    <FlexWrapper flexDirection="col">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form w-full">
        <FormInputElement
          label="Email Address"
          type={InputType.Email}
          error={errors}
          {...register('email', { required: true })}
        />
        <FormInputElement
          label="Password"
          type={InputType.Password}
          error={errors}
          {...register('password', { required: true })}
        />
        <Button version="modal-cta" type="submit" className="w-full mt-5">
          Login to your Account
        </Button>
      </form>
    </FlexWrapper>
  );
}
