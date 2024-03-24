"use client";

import useSelect from "@/lib/hooks/use-select";

import { Select } from "@mantine/core";
import { CloseButton } from "@mantine/core";
import { ActionIcon } from "@mantine/core";

import { IconSelect } from "@tabler/icons-react";

import classes from "./styles.module.css";

export default function SelectField({
  label,
  options,
}: {
  label: "status" | "gender";
  options: string[];
}) {
  const { value, float, ref, handleChange, resetValue } = useSelect(label);

  return (
    <Select
      classNames={classes}
      name={label}
      label={label}
      data={[{ group: "select", items: options }]}
      value={value}
      onChange={handleChange}
      variant="filled"
      ref={ref}
      w={130}
      rightSectionPointerEvents={value ? "auto" : "none"}
      rightSection={
        value ? (
          <CloseButton
            onClick={resetValue}
            size="md"
            aria-label="Clear select"
            c="red.7"
          />
        ) : (
          <ActionIcon variant="subtle" size="sm">
            <IconSelect />
          </ActionIcon>
        )
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
