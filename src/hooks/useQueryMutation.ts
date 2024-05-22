// libs
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

// components
// import { useStore } from '@/store/store';
import {
  genericToastError,
  messageToastError,
  messageToastSuccess,
} from '@/utils/helpers';
import { Data, ResponseData } from '@/api/auth';
import { ModalContext } from '@/context/ModalContext';
// import { setSession } from '@/utils/tokenizer';

type CallbackFunction = (data: Data) => Promise<ResponseData>;

export default function useQueryMutation(apiEndpoint: CallbackFunction) {
  const { setShowLoader } = useContext(ModalContext);
  const { data, mutate, isLoading, isError, isSuccess } =
    useMutation(apiEndpoint);
  // const { loginUser } = useStore();
  // const navigate = useNavigate();

  if (isError) {
    genericToastError();
  }

  if (data) {
    console.log(data);
    setShowLoader(false);
    // const { auth_token } = data as ResponseData;

    // if (created || user) {
    //   messageToastSuccess(
    //     'Congratulations! You have successfully logged into FlowrSpot!'
    //   );
    //   // setSession(token);
    //   // loginUser(user);
    //   // navigate('/');
    // } else {
    //   genericToastError();
    // }
  }

  return {
    data,
    mutate,
    isLoading,
    isError,
    isSuccess,
  };
}
