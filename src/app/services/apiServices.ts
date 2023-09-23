// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact, IContactResponse } from "../../types/contact.model";

// Define a service using a base URL and expected endpoints
export const landingApi = createApi({
  reducerPath: "landingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.getlinked.ai/hackathon/",
  }),
  endpoints: (builder) => ({
    contact: builder.mutation<IContactResponse, IContact>({
      query: (data) => ({
        url: "contact-form",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useContactMutation } = landingApi;
