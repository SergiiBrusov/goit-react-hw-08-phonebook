import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
} from 'components/redux/contacts/selectors';
import { Loading } from 'components/loading';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {isLoading && <Loading />}
      {error && 'something went wrong'}

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
