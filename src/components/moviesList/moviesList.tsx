import React from "react";
import classes from "./moviesList.module.scss";
import MovieCard from "../movieCard/movieCard";
import { MoviesListPropsCard } from "../../types/moviesList";

const MoviesList: React.FC<MoviesListPropsCard> = ({ moviesList }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.container_title}>لیست تمامی فیلم‌ها و سریال‌ها</h1>
      <ul className={classes.container_list}>
        {moviesList.map((item) => (
          <li key={item.id} className={classes.container_list_item}>
            <MovieCard data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
