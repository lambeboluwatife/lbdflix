import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.userInfo = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("userInfo");
      }
    },
    hydrateUserInfo: (state) => {
      if (typeof window !== "undefined") {
        const storedUserInfo = localStorage.getItem("userInfo");
        state.userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
      }
    },
  },
});

export const { setCredentials, logout, hydrateUserInfo } = authSlice.actions;
export default authSlice.reducer;
