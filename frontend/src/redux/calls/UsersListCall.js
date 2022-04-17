import { Fragment, useEffect, memo } from 'react';

import { useDispatch } from 'react-redux';

import { users } from '../actions/usersActions';

const UsersListCall = () => {
  // ** Store Vars
  const dispatch = useDispatch();

  // ** Get data on mount
  useEffect(() => {
    dispatch(users());
  }, [dispatch]);

  return null;
};

export default memo(UsersListCall);
