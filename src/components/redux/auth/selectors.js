import { createSelector } from '@reduxjs/toolkit';

const allAuth = state => state.auth;

export const selectUser = createSelector(allAuth, auth => auth.user);
export const selectToken = createSelector(allAuth, auth => auth.token);
export const selectIsLoggedIn = createSelector(
  allAuth,
  auth => auth.isLoggedIn
);
export const selectIsRefreshing = createSelector(
  allAuth,
  auth => auth.isRefreshing
);
