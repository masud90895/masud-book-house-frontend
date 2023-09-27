import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://assinment-5-backend-pynm8cehn-masud90895.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["books", "wish", "read"],
});
