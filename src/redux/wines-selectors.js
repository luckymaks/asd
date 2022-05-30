import { createSelector } from "@reduxjs/toolkit";

const getSearch = (store) => store.search;

const getWines = (store) => store.wines;

const getSort = (store) => store.sort;

const getWinesBySearch = createSelector(
  [getSearch, getWines],
  (search, wines) => {
    return wines.filter(
      (wine) =>
        wine.name.toLowerCase().includes(search.toLowerCase()) ||
        wine.country.toLowerCase().includes(search.toLowerCase()) ||
        wine.region.toLowerCase().includes(search.toLowerCase()) ||
        wine.grape.toLowerCase().includes(search.toLowerCase()) ||
        wine.type.toLowerCase().includes(search.toLowerCase())
    );
  }
);

const getSortedWines = createSelector(
  [getWinesBySearch, getSort],
  (wines, sort) => {
    if (sort === "from lower") {
      return [...wines].sort((a, b) => {
        if (Number.parseFloat(a.price) > Number.parseFloat(b.price)) {
          return 1;
        }

        if (Number.parseFloat(a.price) < Number.parseFloat(b.price)) {
          return -1;
        }

        return 0;
      });
    }

    if (sort === "from biggest") {
      return [...wines].sort((a, b) => {
        if (Number.parseFloat(a.price) < Number.parseFloat(b.price)) {
          return 1;
        }

        if (Number.parseFloat(a.price) > Number.parseFloat(b.price)) {
          return -1;
        }

        return 0;
      });
    }
    return wines;
  }
);

export { getSort, getSortedWines };
