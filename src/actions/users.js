import types from './types';
import { _getUsers } from '../helpers/_DATA';

const usersFetched = users => ({
  type: types.users.fetched,
  users,
});

export const fetchUsers = () => dispatch =>
  _getUsers().then(users => dispatch(usersFetched(users)));
