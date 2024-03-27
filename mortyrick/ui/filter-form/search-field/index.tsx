import { useCallback } from "react";
import { useFormStatus } from "react-dom";
import { TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import BtnInput from "../btn-input";
import type { FormValues } from "..";
import classes from "./styles.module.css";

export type SearchFieldLabelType =
  | "name"
  | "type"
  | "species"
  | "episode"
  | "dimension";

type SearchFieldPropsType = {
  label: SearchFieldLabelType;
  form: UseFormReturnType<FormValues>;
};

export default function SearchField({ label, form }: SearchFieldPropsType) {
  const { pending } = useFormStatus();

  const float = form.isDirty(label) || form.isTouched(label) || undefined;

  const pointerEvents = form.values[label] ? "auto" : "none";

  const blurInput = useCallback(() => {
    form.resetTouched();
  }, []);

  const resetInput = useCallback(() => {
    form.setFieldValue(label, "");
    form.resetTouched();
  }, []);

  return (
    <TextInput
      {...form.getInputProps(label)}
      classNames={classes}
      name={label}
      label={label}
      placeholder=" . . ."
      disabled={pending}
      data-float={float}
      labelProps={{ "data-float": float }}
      w={130}
      variant="filled"
      onBlur={blurInput}
      rightSectionPointerEvents={pointerEvents}
      rightSection={
        <BtnInput
          type="search"
          isEmpty={form.isDirty(label)}
          disabled={pending}
          resetInput={resetInput}
        />
      }
    ></TextInput>
  );
}
