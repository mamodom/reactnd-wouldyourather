import types from './types';

export const login = id => {
  return {
    type: types.auth.login,
    id,
  };
};
