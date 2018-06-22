import types from './types';

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
