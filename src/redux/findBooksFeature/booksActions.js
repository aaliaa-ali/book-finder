import { GET_BOOKS, SET_BOOKS, FETCH_BOOKS_FAILD } from "./bookTypes";

export const getBooks = () => ({
  type: GET_BOOKS,
  isLoading: true,
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

export const fetchBooksFail = (error) => ({
  type: FETCH_BOOKS_FAILD,
  error,
});
