// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';
import Button from '@/components/elements/Button';
import { useStore } from '@/store/store';

// assets
import profileImage from '@/assets/profile-holder.png';

type ProfileFieldsetProps = {
  label: string;
  value: string;
};

/**
 * Simple reusable component used by <Profile /> so it wasn't
 * decoupled from the parent component.
 *
 * @param {string} label - The label for the field.
 * @param {string} value - The value.
 * @returns {JSX.Element} - The rendered component.
 */
function ProfileFieldset({ label, value }: ProfileFieldsetProps) {
  return (
    <FlexWrapper flexDirection="col" className="mb-5">
      <Typography
        component={Type.SPAN}
        className="text-lightGray text-xss font-ubuntu mb-2"
      >
        {label}
      </Typography>
      <Typography
        component={Type.SPAN}
        className="text-slate-700 font-ubuntu text-lg"
      >
        {value}
      </Typography>
    </FlexWrapper>
  );
}

/**
 * Simple presentational components that displays the contents
 * of the /users/me endpoint.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function Profile() {
  const { currentUser, logoutUser, getFullName } = useStore();

  return (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      flexDirection="col"
    >
      <FlexWrapper alignItems="end" className="mb-10">
        <img src={profileImage} alt="profile" className="mr-[30px]" />
        <FlexWrapper flexDirection="col">
          <Typography
            component={Type.SPAN}
            className="font-ubuntu font-light text-2xl text-slate-700"
          >
            {getFullName()}
          </Typography>
          <Typography
            component={Type.SPAN}
            className="text-lightGray text-sm font-ubuntu mb-[5px]"
          >
            47 sightings
          </Typography>
        </FlexWrapper>
      </FlexWrapper>

      <ProfileFieldset
        value={currentUser?.first_name as string}
        label="First Name"
      />
      <ProfileFieldset
        value={currentUser?.last_name as string}
        label="Last Name"
      />
      <ProfileFieldset
        value="Not provided by /users/me endpoint"
        label="Date of Birth"
      />
      <ProfileFieldset
        value="Not provided by /users/me endpoint"
        label="Email Address"
      />

      <Button version="modal-cta" onClick={logoutUser} className="mt-12">
        Logout
      </Button>
    </FlexWrapper>
  );
}
