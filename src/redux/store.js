import {configureStore} from '@reduxjs/toolkit';

import loginReducer from './slice/login';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
