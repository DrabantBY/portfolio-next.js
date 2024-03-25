import { CloseButton, ActionIcon } from "@mantine/core";
import { IconPencilPlus, IconSelect } from "@tabler/icons-react";

type BtnInputProps = {
  type: "search" | "select";
  isEmpty: boolean;
  disabled: boolean;
  resetFn: () => void;
};

export default function BtnInput({
  type,
  isEmpty,
  resetFn,
  disabled,
}: BtnInputProps) {
  return !isEmpty ? (
    <ActionIcon
      size="sm"
      variant="subtle"
      aria-label="Input icon"
      disabled={disabled}
    >
      {type === "search" && <IconPencilPlus />}
      {type === "select" && <IconSelect />}
    </ActionIcon>
  ) : (
    <CloseButton
      disabled={disabled}
      onClick={resetFn}
      size="md"
      aria-label="Reset input"
      c={disabled ? "gray.7" : "red.7"}
    />
  );
}
