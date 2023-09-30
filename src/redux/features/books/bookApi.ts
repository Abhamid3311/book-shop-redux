import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books"
        }),
        getSingleBook: build.query({
            query: (id) => `/book/${id}`
        })
    })
})



export const { useGetAllBooksQuery, useGetSingleBookQuery } = bookApi;