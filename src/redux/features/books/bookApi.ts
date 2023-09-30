import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books",
            providesTags: ["books"]
        }),
        getSingleBook: build.query({
            query: (id) => `/book/${id}`
        }),
        addBook: build.mutation({
            query: (data) => ({
                url: "/book",
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["books"]
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["books"]
        })
    })
})



export const { useGetAllBooksQuery, useGetSingleBookQuery, useAddBookMutation, useDeleteBookMutation } = bookApi;