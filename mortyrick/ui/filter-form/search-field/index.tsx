import { memo } from "react";
import { Box, Divider, TextInput } from "@mantine/core";
import BtnInput from "../btn-input";
import useSearchField from "@/lib/hooks/use-search-field";
import type { FilterFormSearchFieldLabelType } from "@/types/filter-form.";
import classes from "./styles.module.css";

type SearchFieldPropsType = {
  label: FilterFormSearchFieldLabelType;
  defaultValue: string;
};

const SearchField = memo(({ label, defaultValue }: SearchFieldPropsType) => {
  const {
    pending,
    value,
    isEmpty,
    isFloat,
    onFocus,
    onBlur,
    onChange,
    onReset,
  } = useSearchField(defaultValue);

  return (
    <Box mr="xs">
      <TextInput
        classNames={classes}
        name={label}
        label={label}
        placeholder=" . . ."
        disabled={pending}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
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
            onReset={onReset}
          />
        }
      />
      <Divider size="sm" color={isFloat ? "indigo.4" : undefined} />
    </Box>
  );
});

export default SearchField;
