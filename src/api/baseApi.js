import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => "/tasks", // Corrected to use a function for the query
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            })
        })
    })
});

export const { useGetTaskQuery, useUpdateTaskMutation } = baseApi;

export default baseApi;