import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  phoneNumber: '',
  meterNumber: '',
  region: '',
  district: '',
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setMeterNumber: (state, action) => {
      state.meterNumber = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },
  },
});

export const {
  setDistrict,
  setRegion,
  setFirstName,
  setMeterNumber,
  setPhoneNumber,
} = userDataSlice.actions;
export default userDataSlice.reducer;
