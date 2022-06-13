import { SET_BOOKS, FETCH_BOOKS_FAILD } from "./bookTypes";

const initialState = {
  users: [],
  isLoading: false,
  error:null
};
function bookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      const { books } = action;
      return {
        books,
      };
    case FETCH_BOOKS_FAILD:
      const { error } = action;
      return {
        error,
      };
    default:
      return state;
  }
}
export default bookReducer;

//  function bookReducer(state = initialState, action) {
//   switch (action.type) {
//     case "GET_BOOKS":
//       return {
//         books: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// }
// export default bookReducer
