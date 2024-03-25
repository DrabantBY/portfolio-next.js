import { useFormStatus } from "react-dom";

import { ActionIcon } from "@mantine/core";

import { IconFilterSearch } from "@tabler/icons-react";

export default function BtnSearch() {
  const { pending } = useFormStatus();

  return (
    <ActionIcon
      component="button"
      type="submit"
      size="md"
      variant="subtle"
      aria-label="Form submit"
      loading={pending}
      disabled={pending}
    >
      <IconFilterSearch />
    </ActionIcon>
  );
}
