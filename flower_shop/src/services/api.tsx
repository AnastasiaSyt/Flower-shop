import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICards from '../types/ICards';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getFlowers: builder.query<ICards[], number>({
      query: (limit = 9) => `flowers?limit=${limit}`,
    }),
  }),
});

export const { useGetFlowersQuery } = api;
