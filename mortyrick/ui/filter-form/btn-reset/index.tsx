import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";
import { ActionIcon } from "@mantine/core";
import { IconFilterX } from "@tabler/icons-react";

type BtnResetProps = {
  disabled: boolean;
  resetForm: () => void;
};

const BtnReset = memo(({ disabled, resetForm }: BtnResetProps) => {
  const { pending } = useFormStatus();
  const pathname = usePathname();
  const route = { pathname, query: { page: 1 } };

  return (
    <ActionIcon
      component={Link}
      href={route}
      onClick={resetForm}
      size="sm"
      variant="subtle"
      aria-label="Form reset"
      disabled={disabled || pending}
      c={disabled || pending ? "dark.3" : "red.7"}
    >
      <IconFilterX />
    </ActionIcon>
  );
});

export default BtnReset;
