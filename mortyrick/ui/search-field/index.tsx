import useSearch from "@/lib/hooks/use-search";

import { TextInput, CloseButton } from "@mantine/core";
import { ActionIcon } from "@mantine/core";

import { IconPencilPlus } from "@tabler/icons-react";

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
        value ? (
          <CloseButton
            onClick={resetValue}
            size="md"
            aria-label="Clear input"
            c="red.7"
          />
        ) : (
          <ActionIcon size="sm" variant="subtle">
            <IconPencilPlus />
          </ActionIcon>
        )
      }
      w={130}
      variant="filled"
      size="md"
    ></TextInput>
  );
}
