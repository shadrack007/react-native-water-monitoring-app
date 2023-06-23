import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setLogin} = loginSlice.actions;
export default loginSlice.reducer;
