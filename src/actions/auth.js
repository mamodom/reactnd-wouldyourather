import types from './types';
import { fetchUsers } from './users';

export const login = id => {
  return {
    type: types.auth.login,
    id,
  };
};

export const logout = () => {
  return {
    type: types.auth.logout,
  };
};

export const ensureUserInformationIsAvailable = () => async (
  dispatch,
  getState
) => {
  const { auth, users } = getState();

  if (auth.currentUser in users) return;

  dispatch(fetchUsers());
};
