import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "63701cc1f03239c72c00017f",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
