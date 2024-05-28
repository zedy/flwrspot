/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { memo, useContext, useEffect } from 'react';

// components
import { useStore } from '@/store/store';
import useQueryMutation from '@/hooks/useQueryMutation';
import { fetchUserApi } from '@/api/auth';
import { messageToastError } from '@/utils/helpers';
import Typography, { Type } from '@/components/elements/Typography';
import FlexWrapper from '@/components/elements/FlexWrapper';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import Button from '@/components/elements/Button';
import Profile from '@/components/modals/Profile';

// assets
import profilePhoto from '@/assets/menu_profile_holder.png';

/**
 * This component handles the fetching of the users profile data
 * and displaying it.
 *
 * It shows the profile nav element (name + picture + drawer/modal)
 *
 * @returns JSX
 */
function UserAuth() {
  const { currentUser, token, loginUser, getFullName } = useStore();
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { mutate } = useQueryMutation(fetchUserApi, 'profile', {
    onSuccess: (data) => {
      loginUser(data.user);
    },
    onError: (error: any) => {
      messageToastError(error.response.data.error);
    },
  });

  useEffect(() => {
    if (token && !currentUser) {
      mutate(token);
    }
  }, []);

  if (!currentUser) {
    return null;
  }

  const handleShowProfileModal = () => {
    setIsOpen({
      id: 'profile',
      state: true,
    });
  };

  return (
    <FlexWrapper
      alignItems="center"
      justifyContent="end"
      className="!w-auto flex-row-reverse xl:flex-row mb-10 md:mb-0"
    >
      <Typography
        component={Type.P}
        className="ml-5 md:mr-5 text-main-50 !text-base whitespace-pre block md:hidden xl:block"
      >
        {getFullName()}
      </Typography>
      <Button
        version="icon-only"
        onClick={handleShowProfileModal}
        className="w-10 h-10 !p-0"
        icon={<img src={profilePhoto} alt="profile" />}
      />
      <Modal isOpen={isOpen} id="profile" type="wide">
        <Profile />
      </Modal>
    </FlexWrapper>
  );
}

export default memo(UserAuth);
