import React from "react";
import { MovieCardPropsType } from "../../types/moviesList";
import notFound from "../../assets/not-found.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import classes from "./movieCard.module.scss";

const MovieCard: React.FC<MovieCardPropsType> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.container_overlay}>
        <div className={classes.container_overlay_badge}>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <span>{data.avg_rate_label}</span>
        </div>
        <p>{data.movie_title}</p>
        <p>{data.categories?.map((item) => item.title).join(" - ")}</p>
      </div>
      <img
        src={data.pic.movie_img_s}
        alt={data.movie_title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = notFound;
        }}
      />
      <div className={classes.container_info}>
        <p>{data.movie_title}</p>
        <p className={classes.container_info_badge}>
          امتیاز: {data.rate_avrage}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
