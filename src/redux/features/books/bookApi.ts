import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books",
            providesTags: ["books"]
        }),

        getRecentTenBooks: build.query({
            query: () => "/books/recent",
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
        }),

        updateBook: build.mutation({
            query: ({ id, ...data }) => ({
                url: `/book/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["books"]
        }),

        addComment: build.mutation({
            query: ({ bookId, data }) => ({
                url: `/comment/${bookId}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["comments"]
        }),

        getComments: build.query({
            query: (id) => `/comment/${id}`,
            providesTags: ["comments"]
        })

    })
});




export const { useGetAllBooksQuery, useGetRecentTenBooksQuery, useGetSingleBookQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation, useAddCommentMutation, useGetCommentsQuery } = bookApi;