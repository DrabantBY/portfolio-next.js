import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";
import { ActionIcon, Button } from "@mantine/core";
import { IconFilterX } from "@tabler/icons-react";

type BtnResetPropsType = {
  isSidebar: boolean;
  onReset: () => void;
};

const BtnReset = memo(({ isSidebar, onReset }: BtnResetPropsType) => {
  const { pending } = useFormStatus();
  const pathname = usePathname();
  const route = { pathname, query: { page: 1 } };

  return isSidebar ? (
    <Button
      component={Link}
      href={route}
      size="xs"
      variant="light"
      w={104}
      onClick={onReset}
      aria-label="Form reset"
      disabled={pending}
      c={pending ? undefined : "yellow.7"}
      leftSection={<IconFilterX size="20" />}
    >
      Reset
    </Button>
  ) : (
    <ActionIcon
      component={Link}
      href={route}
      size="md"
      radius={0}
      variant="subtle"
      onClick={onReset}
      aria-label="Form reset"
      disabled={pending}
      c={pending ? undefined : "yellow.7"}
    >
      <IconFilterX />
    </ActionIcon>
  );
});

export default BtnReset;
