import { Box, Divider, TextInput } from "@mantine/core";
import BtnInput from "../btn-input";
import useSearchField from "@/lib/hooks/use-search-field";
import type {
  FilterFormSearchFieldLabelType,
  FilterFormType,
} from "@/types/filter-form.";
import classes from "./styles.module.css";
import { ChangeEventHandler } from "react";

type SearchFieldPropsType = {
  label: FilterFormSearchFieldLabelType;
  form: FilterFormType;
};

export default function SearchField({ label, form }: SearchFieldPropsType) {
  const {
    pending,
    value,
    isFloat,
    isEmpty,
    handleOnFocus,
    handleOnBlur,
    handleOnReset,
    handleOnChange,
  } = useSearchField(label, form);

  return (
    <Box mr="xs">
      <TextInput
        classNames={classes}
        name={label}
        label={label}
        placeholder=" . . ."
        disabled={pending}
        value={value}
        onChange={handleOnChange as ChangeEventHandler<HTMLInputElement>}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        data-float={isFloat}
        labelProps={{ "data-float": isFloat }}
        w={130}
        variant="unstyled"
        rightSectionPointerEvents={isEmpty ? "auto" : "none"}
        rightSection={
          <BtnInput
            type="search"
            isEmpty={isEmpty}
            disabled={pending}
            onReset={handleOnReset}
          />
        }
      />
      <Divider size="sm" color={isFloat ? "indigo.4" : undefined} />
    </Box>
  );
}
