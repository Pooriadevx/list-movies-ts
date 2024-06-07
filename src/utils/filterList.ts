import { filteredBaseType, MovieCardType } from "../types/moviesList";

export const filteredBaseGenre: filteredBaseType = (value, list) => {
  return list.filter((item) =>
    item.categories.some((i) => i.link_key === value) ? item : null
  );
};

export const filteredBaseRate: filteredBaseType = (value, list) => {
  const copyOfData: MovieCardType[] = JSON.parse(JSON.stringify(list));

  return copyOfData.sort((a, b) => {
    if (+value) {
      return +b.rate_avrage - +a.rate_avrage;
    } else {
      return +a.rate_avrage - +b.rate_avrage;
    }
  });
};
