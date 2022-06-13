import axios from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { setBooks,fetchBooksFail } from "./booksActions";

export function* fetchBooks(action) {
  try {
    const { data } = yield call(fetchBooksApi, action);
    yield put(setBooks(data.items));
    if(!data.items) throw  new Error('Please Try Another Keyword');
  } catch (e) {
    yield put(fetchBooksFail(e));
  }
}
export function* mySaga() {
  yield takeLatest("GET_BOOKS", fetchBooks);
}

function fetchBooksApi(action) {
  return axios.request({
    method: "get",
    url: `https://www.googleapis.com/books/v1/volumes?q=${action.payload}`,
  });
}

//using thunk
// export function getBooks(params) {
//   return (dispatch) => {
//     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params}`).then((res) => {
//       console.log(res);
//       dispatch({
//         type: "GET_BOOKS",
//         payload: res.data.items,
//       });
//     });
//   };
// }
