/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { memo, useEffect, useMemo } from 'react';

// components
import { useStore } from '@/store/store';
import useQueryMutation from '@/hooks/useQueryMutation';
import { fetchUserApi } from '@/api/auth';
import { messageToastError } from '@/utils/helpers';
import Typography, { Type } from './elements/Typography';
import FlexWrapper from './elements/FlexWrapper';

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
  const { currentUser, token, loginUser } = useStore();
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

  const getProfileName = useMemo(() => {
    return `${currentUser?.first_name} ${currentUser?.last_name}`;
  }, [currentUser]);

  return (
    <FlexWrapper alignItems="center" justifyContent="end" classes="!w-auto">
      <Typography
        component={Type.P}
        classes="mr-5 text-main-50 text-base whitespace-pre"
      >
        {getProfileName}
      </Typography>
      <img src={profilePhoto} alt="profile" />
    </FlexWrapper>
  );
}

export default memo(UserAuth);
