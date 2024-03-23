import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { TextInput, CloseButton } from "@mantine/core";

import classes from "./styles.module.css";

export default function SearchField({
  query,
}: {
  query: "name" | "type" | "species" | "episode" | "dimension";
}) {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(query) ?? "";
  const [value, setValue] = useState<string>(initialValue);
  const [focus, setFocus] = useState<boolean>(false);
  const float = Boolean(value.trim()) || focus || undefined;

  return (
    <TextInput
      classNames={classes}
      label={query}
      placeholder="Input here..."
      data-float={float}
      labelProps={{ "data-float": float }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      rightSection={
        <CloseButton
          onClick={() => setValue("")}
          display={value ? "flex" : "none"}
          size="lg"
          aria-label="Clear input"
          c="red.7"
        />
      }
      w={180}
      variant="filled"
      size="md"
    ></TextInput>
  );
}
