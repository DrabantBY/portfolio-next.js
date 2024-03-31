import { memo } from "react";
import { useFormStatus } from "react-dom";
import { ActionIcon } from "@mantine/core";
import { IconFilterSearch } from "@tabler/icons-react";

const BtnFilter = memo(({ disabled }: { disabled: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <ActionIcon
      component="button"
      type="submit"
      size="md"
      radius={0}
      variant="subtle"
      aria-label="Form submit"
      loading={pending}
      disabled={disabled || pending}
      c={disabled ? undefined : "indigo.7"}
    >
      <IconFilterSearch />
    </ActionIcon>
  );
});

export default BtnFilter;
