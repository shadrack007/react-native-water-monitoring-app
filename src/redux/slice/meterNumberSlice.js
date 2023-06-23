import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getMeterNUmber = async () => {
  await AsyncStorage.getItem('meterNumber');
};

const initialState = {
  meterNumber: null,
  numberExist: false
};

export const meterNumberSlice = createSlice({
  name: 'meterNumber',
  initialState,
  reducers: {
    setMeterNumber: (state, action) => {
      state.meterNumber = action.payload;
    },
    numberExist: (state) => {
      state.numberExist = meterNumber ? true : false
    }
  },
});

export const {setMeterNumber, numberExist} = meterNumberSlice.actions;
export default meterNumberSlice.reducer;
