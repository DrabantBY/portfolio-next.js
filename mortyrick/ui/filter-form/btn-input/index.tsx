import { CloseButton, ActionIcon } from "@mantine/core";
import { IconPencilPlus, IconSelect } from "@tabler/icons-react";

type BtnInputProps = {
  type: "search" | "select";
  isEmpty: boolean;
  resetFn: () => void;
};

export default function BtnInput({ type, isEmpty, resetFn }: BtnInputProps) {
  return !isEmpty ? (
    <ActionIcon size="sm" variant="subtle" aria-label="Input icon">
      {type === "search" && <IconPencilPlus />}
      {type === "select" && <IconSelect />}
    </ActionIcon>
  ) : (
    <CloseButton
      onClick={resetFn}
      size="md"
      aria-label="Reset input"
      c="red.7"
    />
  );
}
