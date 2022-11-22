import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query() {
        return {
          url: `user/me`,
          method: "GET",
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        };
      },
      invalidatesTags: [{ type: "Users" }],
    }),
    signupUser: builder.mutation({
      query(body) {
        return {
          url: `user/signup`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Users" }],
    }),
    loginUser: builder.mutation({
      query(body) {
        return {
          url: `user/login`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Users" }],
    }),
    signOutUser: builder.mutation({
      query(body) {
        return {
          url: `user/signout`,
          method: "PATCH",
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
          body,
        };
      },
      invalidatesTags: [{ type: "Users" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useSignOutUserMutation,
} = userApi;
