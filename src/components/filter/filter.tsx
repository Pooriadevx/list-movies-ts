import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  OptionProps,
  default as ReactSelect,
  SingleValue,
  components,
} from "react-select";
import {
  FilterPropsType,
  FilterValues,
  HandleChangeType,
  OptionType,
} from "../../types/moviesList";
import { CustomSelectStyles } from "../../constants/filterOptions";

const Filter: React.FC<FilterPropsType> = ({
  handleFilter,
  multiSelectOptions,
}) => {
  const [optionSelected, setOptionSelected] =
    useState<SingleValue<OptionType>>(null);

  const [, setSearchParams] = useSearchParams();

  const handleChange: HandleChangeType = (value, type) => {
    setOptionSelected(value);
    if (value?.value) {
      handleFilter(value.value, type);
      setSearchParams((searchParams) => {
        searchParams.set(type, value.value);
        return searchParams;
      });
    }
  };

  const Option = (props: OptionProps) => {
    return (
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.label}</label>
      </components.Option>
    );
  };

  return (
    <ReactSelect
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      onChange={(val, act) =>
        handleChange(val as OptionType, act.name as FilterValues)
      }
      value={optionSelected}
      components={{
        Option,
      }}
      isSearchable={false}
      styles={CustomSelectStyles}
      {...multiSelectOptions}
    />
  );
};

export default Filter;
