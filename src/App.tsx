import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "./components/moviesList/moviesList";
import Filter from "./components/filter/filter";
import { MovieCardType } from "./types/moviesList";
import {
  filterFuncs,
  SelectGenreOptions,
  SelectRateOptions,
} from "./constants/filterOptions";
import data from "./data.json";
import classes from "./App.module.scss";

function App() {
  const [moviesList, setMoviesList] = useState<MovieCardType[]>(data);
  const [searchParams] = useSearchParams();

  const handleFilteredData = () => {
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
  };

  useEffect(() => handleFilteredData(), [searchParams]);

  return (
    <div className={classes.App}>
      <header className={classes.App_header}>
        <div className={classes.App_header_filter}>
          <Filter multiSelectOptions={SelectGenreOptions} />
          <Filter multiSelectOptions={SelectRateOptions} />
        </div>
        <MoviesList moviesList={moviesList} />
      </header>
    </div>
  );
}

export default App;
