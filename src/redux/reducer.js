import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { changeUser } from "./auth-actions";
import { setWines, changeSearch, changeSort } from "./wines-actions";

const initState = {
  isLogined: false,
  user: null,
  wines: [],
  search: "",
  sort: "normal",
};

const isLoginedReducer = createReducer(initState.isLogined, {
  [changeUser]: (state) => !state,
});

const userReducer = createReducer(initState.user, {
  [changeUser]: (_, { payload }) => payload,
});

const winesReducer = createReducer(initState.wines, {
  [setWines]: (_, { payload }) => payload,
});

const searchReducer = createReducer(initState.search, {
  [changeSearch]: (_, { payload }) => payload,
});

const sortReducer = createReducer(initState.sort, {
  [changeSort]: (_, { payload }) => payload,
});

const reducer = combineReducers({
  isLogined: isLoginedReducer,
  user: userReducer,
  wines: winesReducer,
  search: searchReducer,
  sort: sortReducer,
});

export { reducer };
