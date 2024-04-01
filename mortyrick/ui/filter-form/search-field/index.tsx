import { memo, useCallback, useState } from "react";
import { Box, Divider, TextInput } from "@mantine/core";
import BtnInput from "../btn-input";
import type { FilterFormSearchFieldLabelType } from "@/types/filter-form.";
import { useFormStatus } from "react-dom";
import classes from "./styles.module.css";

type SearchFieldPropsType = {
  label: FilterFormSearchFieldLabelType;
};

const SearchField = memo(({ label }: SearchFieldPropsType) => {
  const { pending } = useFormStatus();
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const isEmpty = Boolean(value);
  const isFloat = isEmpty || focus || undefined;

  console.log("label", value);

  return (
    <Box mr="xs">
      <TextInput
        classNames={classes}
        name={label}
        label={label}
        placeholder=" . . ."
        disabled={pending}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        data-float={isFloat}
        labelProps={{ "data-float": isFloat }}
        w={{ base: "100%", md: 130 }}
        variant="unstyled"
        rightSectionPointerEvents={isEmpty ? "auto" : "none"}
        rightSection={
          <BtnInput
            type="search"
            isEmpty={isEmpty}
            disabled={pending}
            onReset={() => {
              setValue("");
            }}
          />
        }
      />
      <Divider size="sm" color={isFloat ? "indigo.4" : undefined} />
    </Box>
  );
});

export default SearchField;
