import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books"
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
        })
    })
})



export const { useGetAllBooksQuery, useGetSingleBookQuery, useAddBookMutation } = bookApi;