import { useFormStatus } from "react-dom";

import { Select } from "@mantine/core";

import BtnInput from "../btn-input";

import useSelect from "@/lib/hooks/use-select";

import classes from "./styles.module.css";

export default function SelectField({
  label,
  options,
}: {
  label: "status" | "gender";
  options: string[];
}) {
  const { value, float, ref, handleChange, resetValue } = useSelect(label);
  const { pending } = useFormStatus();

  return (
    <Select
      classNames={classes}
      name={label}
      label={label}
      data={[{ group: "select", items: options }]}
      value={value}
      disabled={pending}
      onChange={handleChange}
      variant="filled"
      ref={ref}
      w={130}
      rightSectionPointerEvents={value ? "auto" : "none"}
      rightSection={
        <BtnInput
          type="select"
          isEmpty={Boolean(value)}
          resetFn={resetValue}
          disabled={pending}
        />
      }
      comboboxProps={{
        shadow: "md",
        size: "sm",
        offset: 0,
        dropdownPadding: 0,
      }}
      data-float={float}
      labelProps={{ "data-float": float }}
    />
  );
}
