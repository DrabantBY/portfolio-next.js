import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";
import { ActionIcon } from "@mantine/core";
import { IconFilterX } from "@tabler/icons-react";

type BtnResetPropsType = {
  disabled: boolean;
  onReset: () => void;
};

const BtnReset = memo(({ disabled, onReset }: BtnResetPropsType) => {
  const { pending } = useFormStatus();
  const pathname = usePathname();
  const route = { pathname, query: { page: 1 } };

  return (
    <ActionIcon
      component={Link}
      href={route}
      onClick={onReset}
      size="md"
      variant="subtle"
      aria-label="Form reset"
      disabled={disabled || pending}
      c={disabled || pending ? "dark.3" : "yellow.7"}
    >
      <IconFilterX />
    </ActionIcon>
  );
});

export default BtnReset;
