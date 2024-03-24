import { useState } from "react";

import { useSearchParams } from "next/navigation";

import { TextInput, CloseButton } from "@mantine/core";
import { ActionIcon } from "@mantine/core";

import { IconPencilPlus } from "@tabler/icons-react";

import classes from "./styles.module.css";

export default function SearchField({
  label,
}: {
  label: "name" | "type" | "species" | "episode" | "dimension";
}) {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(label) ?? "";
  const [value, setValue] = useState<string>(initialValue);
  const [focus, setFocus] = useState<boolean>(false);
  const float = Boolean(value.trim()) || focus || undefined;

  return (
    <TextInput
      classNames={classes}
      label={label}
      placeholder=". . ."
      data-float={float}
      labelProps={{ "data-float": float }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      rightSectionPointerEvents={value ? "auto" : "none"}
      rightSection={
        value ? (
          <CloseButton
            onClick={() => setValue("")}
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
