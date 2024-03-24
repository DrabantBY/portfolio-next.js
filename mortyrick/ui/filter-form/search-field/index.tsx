import { TextInput } from "@mantine/core";

import BtnInput from "../btn-input";

import useSearch from "@/lib/hooks/use-search";

import classes from "./styles.module.css";

export default function SearchField({
  label,
}: {
  label: "name" | "type" | "species" | "episode" | "dimension";
}) {
  const { value, float, handleChange, handleFocus, handleBlur, resetValue } =
    useSearch(label);

  return (
    <TextInput
      classNames={classes}
      name={label}
      label={label}
      placeholder=" . . ."
      value={value}
      data-float={float}
      labelProps={{ "data-float": float }}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      rightSectionPointerEvents={value ? "auto" : "none"}
      rightSection={
        <BtnInput type="search" isEmpty={Boolean(value)} resetFn={resetValue} />
      }
      w={130}
      variant="filled"
      size="md"
    ></TextInput>
  );
}
