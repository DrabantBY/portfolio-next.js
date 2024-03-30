import { memo } from "react";
import { CloseButton, ActionIcon } from "@mantine/core";
import { IconPencilPlus, IconSelect } from "@tabler/icons-react";
import type { MouseEventHandler } from "react";

type BtnInputPropsType = {
  type: "search" | "select";
  isEmpty: boolean;
  disabled: boolean;
  onReset: MouseEventHandler<HTMLButtonElement>;
};

const BtnInput = memo(
  ({ type, isEmpty, disabled, onReset }: BtnInputPropsType) => {
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
        onClick={onReset}
        size="md"
        aria-label="Reset input"
        c={disabled ? "gray.7" : "yellow.7"}
      />
    );
  }
);

export default BtnInput;
