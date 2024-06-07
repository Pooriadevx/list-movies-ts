import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "./components/moviesList/moviesList";
import Filter from "./components/filter/filter";
import {
  FilteredListType,
  HandleFilterType,
  MovieCardType,
} from "./types/moviesList";
import {
  filterFuncs,
  SelectGenreOptions,
  SelectRateOptions,
} from "./constants/filterOptions";
import data from "./data.json";
import classes from "./App.module.scss";

function App() {
  const [moviesList, setMoviesList] = useState<MovieCardType[]>([]);
  const [searchParams] = useSearchParams();

  const handleFilteredList: HandleFilterType = (value, type) => {
    if (value) {
      return filterFuncs[type as keyof FilteredListType](value, moviesList);
    } else {
      return data;
    }
  };

  useEffect(() => {
    let dataOfList: MovieCardType[] = data;
    if (searchParams.size) {
      searchParams.forEach((value, key) => {
        dataOfList = filterFuncs[key as keyof typeof filterFuncs](
          value,
          dataOfList
        );
      });
    }
    setMoviesList(dataOfList);
  }, []);

  return (
    <div className={classes.App}>
      <header className={classes.App_header}>
        <div className={classes.App_header_filter}>
          <Filter
            handleFilter={(value, type) =>
              setMoviesList(handleFilteredList(value, type))
            }
            multiSelectOptions={SelectGenreOptions}
          />
          <Filter
            handleFilter={(value, type) => {
              setMoviesList(handleFilteredList(value, type));
            }}
            multiSelectOptions={SelectRateOptions}
          />
        </div>
        <MoviesList moviesList={moviesList} />
      </header>
    </div>
  );
}

export default App;
