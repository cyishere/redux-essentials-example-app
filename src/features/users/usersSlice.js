import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Debbie Ocean" },
  { id: "1", name: "Lou Miller" },
  { id: "2", name: "Tammy" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
