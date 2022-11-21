import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
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
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupUserMutation } = userApi;