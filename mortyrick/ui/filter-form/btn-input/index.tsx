import { memo } from "react";
import { CloseButton, ActionIcon } from "@mantine/core";
import { IconPencilPlus, IconSelect } from "@tabler/icons-react";

type BtnInputProps = {
  type: "search" | "select";
  isEmpty: boolean;
  disabled: boolean;
  resetInput: () => void;
};

const BtnInput = memo(
  ({ type, isEmpty, disabled, resetInput }: BtnInputProps) => {
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
        onClick={resetInput}
        size="md"
        aria-label="Reset input"
        c={disabled ? "gray.7" : "red.7"}
      />
    );
  }
);

export default BtnInput;
