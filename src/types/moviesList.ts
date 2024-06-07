import type { Props, SingleValue } from "react-select";

type Serial = {
  enable: boolean;
  parent_title: string;
  season_id: number;
  serial_part: string;
  part_text: string;
  season_text: string;
  last_part: string;
};
type RelData = {
  rel_type: string;
  rel_id: string;
  rel_uid: string | null;
  rel_title: string | null;
  rel_type_txt: string;
};
type Badge = {
  free: boolean;
  backstage: boolean;
  vision: boolean;
  hear: boolean;
  online_release: boolean;
  exclusive: boolean;
  commingsoon: boolean;
  info: null[];
};
type Pic = {
  movie_img_s: string;
  movie_img_m: string;
  movie_img_b: string;
};
type CategoriesEntity = {
  title_en: string;
  title: string;
  link_type: string;
  link_key: string;
};
type Duration = {
  value: number;
  text: string;
};
type CountriesEntity = {
  country: string;
  country_en: string;
};
type DubbedOrSubtitle = {
  enable: boolean;
  text: string;
};
type Audio = {
  languages: string[] | null;
  isMultiLanguage: boolean;
};
type LanguageInfo = {
  flag: string;
  text: string;
};

export type MovieCardType = {
  type: string;
  id: string;
  link_type: string;
  link_key: string;
  theme: string;
  output_type: string;
  movie_id: string;
  uid: string;
  movie_title: string;
  movie_title_en: string;
  tag_id: string;
  serial: Serial;
  watermark: boolean;
  HD: boolean;
  watch_list_action: string;
  commingsoon_txt: string;
  rel_data: RelData;
  badge: Badge;
  rate_enable: boolean;
  rate_enable_by_cnt: boolean;
  descr: string;
  cover: string | null;
  publish_date: string;
  age_range: string;
  pic: Pic;
  rate_avrage: string;
  avg_rate_label: string;
  pro_year: string;
  imdb_rate: string;
  categories: CategoriesEntity[];
  duration: Duration;
  countries: CountriesEntity[];
  dubbed: DubbedOrSubtitle;
  subtitle: DubbedOrSubtitle;
  audio: Audio;
  language_info: LanguageInfo;
  director: string;
  last_watch: null;
  freemium: boolean;
  position: null;
  sid: null;
  uuid: null;
};

export type filteredBaseType = (
  value: OptionType["value"],
  moviesList: MovieCardType[]
) => MovieCardType[];

export type FilterFuncsType = Record<FilterValues, filteredBaseType>;

export type HandleChangeType = (
  data: SingleValue<OptionType>,
  type: FilterValues
) => void;

export type OptionType = {
  value: string;
  label: string;
};

export type MovieCardPropsType = {
  data: Pick<
    MovieCardType,
    | "avg_rate_label"
    | "movie_title"
    | "categories"
    | "pic"
    | "movie_title"
    | "rate_avrage"
  >;
};

export type FilterPropsType = {
  multiSelectOptions: Props;
};

export type MoviesListPropsCard = {
  moviesList: MovieCardType[];
};

export enum GenreValues {
  drama = "درام",
  comedy = "کمدی",
  action = "اکشن",
  sci_fi = "علمی تخیلی",
}

export enum RateValues {
  Descend = "0",
  Ascend = "1",
}

export enum FilterPlaceholders {
  Genre = "ژانر",
  Rate = "امتیاز فیلم",
}

export enum FilterValues {
  Rate = "rate",
  Genre = "genre",
}
