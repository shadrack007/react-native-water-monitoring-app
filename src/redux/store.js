import {configureStore} from '@reduxjs/toolkit';

import loginReducer from './slice/login';
import userDataReducer from './slice/userDataSlice';
import meterNumberReducer from './slice/meterNumberSlice';

export const store = configureStore({
  reducer: {
    meterNumber: meterNumberReducer,
    login: loginReducer,
    userData: userDataReducer,
  },
});
