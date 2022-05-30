import { createAction } from "@reduxjs/toolkit";

const changeSearch = createAction("search/change");

const changeSort = createAction("sort/change");

const setWines = createAction("wines/set");

export { setWines, changeSearch, changeSort };
