import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { TextInput, CloseButton } from "@mantine/core";

export default function SearchField({
  query,
}: {
  query: "name" | "type" | "species" | "episode" | "dimension";
}) {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(query) ?? "";
  const [value, setValue] = useState<string>(initialValue);

  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="type here ..."
      leftSectionWidth={70}
      rightSection={
        <CloseButton
          onClick={() => setValue("")}
          display={value ? "flex" : "none"}
          size="md"
          aria-label="Clear input"
          c="red.7"
        />
      }
      w={250}
      variant="filled"
      size="md"
    ></TextInput>
  );
}
