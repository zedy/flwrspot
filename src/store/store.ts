// libs
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// types
import { User } from '@/types/user';

type State = {
  currentUser: User | null;
  token: string;
};

// initial state
export const initialState: State = {
  currentUser: null,
  token: '',
};

/**
 * The app uses a simple state management tool, no need to complicate things.
 *
 * @see https://docs.pmnd.rs/zustand/getting-started/introduction
 * @returns hook
 */
const storeObject = (set) => ({
  ...initialState,
  setToken: (token: string) =>
    set(
      (store: State) => ({
        ...store,
        token,
      }),
      false,
      'updated token'
    ),
  unsetToken: () =>
    set(
      (store: State) => ({
        ...store,
        token: '',
      }),
      false,
      'removed token'
    ),
  loginUser: (user: User) =>
    set(
      (store: State) => ({
        ...store,
        currentUser: user,
      }),
      false,
      'user logged in'
    ),
  logoutUser: () => {
    set(
      (store: State) => ({
        ...store,
        currentUser: null,
      }),
      false,
      'user logged out'
    );
  },
  updateProfile: (profile) => {
    // TODO do i need this? PUT
    set(
      (store: State) => ({
        ...store,
        currentUser: { ...store.currentUser, profile },
      }),
      false,
      'user profile updated'
    );
  },
});

const withDevtools =
  import.meta.env.VITE_ENV === 'DEV' ? devtools(storeObject) : storeObject;

export const useStore = create(persist(withDevtools, { name: 'store' }));
