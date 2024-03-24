"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(label);
  const [value, setValue] = useState<string | null>(initialValue);
  const float = Boolean(value) || undefined;

  return (
    <Select
      classNames={classes}
      label={label}
      data={[{ group: "select", items: options }]}
      value={value}
      onChange={setValue}
      variant="filled"
      w={130}
      rightSectionPointerEvents={value ? "auto" : "none"}
      rightSection={
        value ? (
          <CloseButton
            onClick={() => setValue(null)}
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
        size: "sm",
        offset: 0,
        dropdownPadding: 0,
      }}
      data-float={float}
      labelProps={{ "data-float": float }}
    />
  );
}
