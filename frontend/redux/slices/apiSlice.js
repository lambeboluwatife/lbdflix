import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http:localhost/5000" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Movies"],
  endpoints: (builder) => ({}),
});
