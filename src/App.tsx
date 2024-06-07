import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "./components/moviesList/moviesList";
import Filter from "./components/filter/filter";
import {
  FilteredListType,
  FilterValues,
  HandleFilterType,
  MovieCardType,
} from "./types/moviesList";
import {
  SelectGenreOptions,
  SelectRateOptions,
} from "./constants/filterOptions";
import { filteredBaseGenre, filteredBaseRate } from "./utils/filterList";
import data from "./data.json";
import classes from "./App.module.scss";

function App() {
  const [moviesList, setMoviesList] = useState<MovieCardType[]>(data);
  const [searchParams] = useSearchParams();

  const handleFilteredList: HandleFilterType = (value, type) => {
    if (value) {
      const obj: FilteredListType = {
        [FilterValues.Rate]: () => filteredBaseRate(value, moviesList),
        [FilterValues.Genre]: () => filteredBaseGenre(value, data),
      };
      return obj[type as keyof FilteredListType]();
    } else {
      return data;
    }
  };

  const handleInitialData = () => {
    let dataOfList: MovieCardType[] = data;

    if (searchParams.size) {
      searchParams.forEach((value, key) => {
        dataOfList = handleFilteredList(value, key);
        console.log(dataOfList);
      });
    }
    setMoviesList(dataOfList);
  };

  useEffect(() => handleInitialData(), []);

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
