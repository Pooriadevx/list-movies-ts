import { filteredBaseGenre, filteredBaseRate } from './../utils/filterList';
import {
  filteredBaseType,
  FilterPlaceholders,
  FilterValues,
  OptionType,
} from "./../types/moviesList";
import { GenreValues, RateValues } from "../types/moviesList";
import type { Props, StylesConfig } from "react-select";

export const genresOptions: OptionType[] = [
  { value: "drama", label: GenreValues.drama },
  { value: "comedy", label: GenreValues.comedy },
  { value: "action", label: GenreValues.action },
  { value: "sci-fi", label: GenreValues.sci_fi },
];

export const ratesOptions: OptionType[] = [
  { value: RateValues.Ascend, label: "بالاترین امتیاز" },
  { value: RateValues.Descend, label: "یایین‌ترین امتیاز" },
];

export const SelectGenreOptions: Props = {
  placeholder: FilterPlaceholders.Genre,
  options: genresOptions,
  isMulti: false,
  name: FilterValues.Genre,
};

export const SelectRateOptions: Props = {
  placeholder: FilterPlaceholders.Rate,
  options: ratesOptions,
  isMulti: false,
  name: FilterValues.Rate,
};

export const CustomSelectStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    width: 350,
    borderRadius: 8,
    textAlign: "right",
    padding: "3px 5px",
    background: "#171616",
    boxShadow: "none",
    borderColor: "#424142",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#424142",
    },
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "unset",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: 5,
    "&:active": {
      backgroundColor: "unset",
    },
    input: {
      appearance: "none",
      WebkitAppearance: "none",
      position: "relative",
      backgroundColor: "#1e1e1e",
      border: "1px solid #b58b35",
      borderRadius: 3,
      width: 15,
      height: 15,
      cursor: "pointer",
      "&:checked": {
        color: "#b58b35",
        fontSize: 13,
        backgroundColor: "transparent",
        "&::after": {
          content: '"\u2714"',
          display: "block",
          position: "absolute",
          textAlign: "center",
        },
      },
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: 16,
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 8,
    backgroundColor: "unset",
    border: "none",
  }),
  menuList: (base, { options }) => ({
    ...base,
    borderRadius: 12,
    background: "#1e1e1e",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    "& > div": {
      flex: options.length > 2 ? "50%" : "100%",
    },
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: 16,
    color: "white",
  }),
  dropdownIndicator: (base, { selectProps }) => ({
    ...base,
    "& > svg": {
      height: 16,
      transition: "transform 0.2s ease-in-out",
      width: 16,
      color: "white",
      transform: selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
};

export const filterFuncs: Record<FilterValues, filteredBaseType> = {
  [FilterValues.Genre]: filteredBaseGenre,
  [FilterValues.Rate]: filteredBaseRate,
};
