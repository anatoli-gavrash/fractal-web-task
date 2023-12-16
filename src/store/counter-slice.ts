import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";

export const formData = createSlice({
  name: 'formData',
  initialState: initialState,
  reducers: {}
});

export const {} = formData.actions;

export default formData.reducer;
