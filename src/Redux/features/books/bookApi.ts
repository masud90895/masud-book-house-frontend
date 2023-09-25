import { api } from "../../api/apiSlice";

const token = localStorage.getItem("auth") as string;
const myToken = JSON.parse(token);

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ filterName, filterValue }) =>
        `/books?${filterName}=${filterValue}`,
      providesTags: ["books"],
    }),
    myBooks: builder.query({
      query: () => ({
        url: "/books/mybooks",
        headers: {
          authorization: myToken?.accessToken,
        },
      }),
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    AddBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/reviews/${id}`,
        method: "POST",
        body: data,
      }),
    }),
    getReviews: builder.query({
      query: (id) => `/books/reviews/${id}`,
      // providesTags: ["reviews"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    myWish: builder.query({
      query: () => ({
        url: "/wish",
        headers: {
          authorization: myToken?.accessToken,
        },
      }),
      providesTags: ["wish"],
    }),
    addWish: builder.mutation({
      query: (data) => ({
        url: `/wish`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wish"],
    }),
    addReading: builder.mutation({
      query: (data) => ({
        url: `/read`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["read"],
    }),
    myReading: builder.query({
      query: () => ({
        url: "/read",
        headers: {
          authorization: myToken?.accessToken,
        },
      }),
      providesTags: ["read"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useMyBooksQuery,
  useGetReviewsQuery,
  usePostReviewMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddWishMutation,
  useMyWishQuery,
  useAddReadingMutation,
  useMyReadingQuery,
} = bookApi;
