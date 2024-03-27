import { useEffect, useRef, useCallback } from "react";
import { useFormStatus } from "react-dom";
import { Select } from "@mantine/core";
import BtnInput from "../btn-input";
import type { UseFormReturnType } from "@mantine/form";
import type { FormValues } from "..";
import classes from "./styles.module.css";

export type SelectFieldLabelType = "status" | "gender";

type SelectFieldPropsType = {
  label: SelectFieldLabelType;
  form: UseFormReturnType<FormValues>;
  options: string[];
};

export default function SelectField({
  label,
  form,
  options,
}: SelectFieldPropsType) {
  const { pending } = useFormStatus();

  const refSelect = useRef<HTMLInputElement | null>(null);

  const float = form.isDirty(label) || undefined;

  const pointerEvents = form.values[label] ? "auto" : "none";

  const resetInput = useCallback(() => {
    form.setFieldValue(label, null);
    form.resetTouched();
  }, []);

  useEffect(() => {
    if (refSelect.current) {
      refSelect.current.blur();
    }
  }, [form.values[label]]);

  return (
    <Select
      ref={refSelect}
      {...form.getInputProps(label)}
      classNames={classes}
      name={label}
      label={label}
      data={[{ group: "select", items: options }]}
      disabled={pending}
      data-float={float}
      labelProps={{ "data-float": float }}
      w={130}
      variant="filled"
      rightSectionPointerEvents={pointerEvents}
      rightSection={
        <BtnInput
          type="select"
          isEmpty={form.isDirty(label)}
          disabled={pending}
          resetInput={resetInput}
        />
      }
      comboboxProps={{
        shadow: "md",
        size: "sm",
        offset: 0,
        dropdownPadding: 0,
      }}
    />
  );
}
