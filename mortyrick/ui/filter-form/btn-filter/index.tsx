import { memo } from "react";
import { useFormStatus } from "react-dom";
import { ActionIcon, Button } from "@mantine/core";
import { IconFilterSearch } from "@tabler/icons-react";

type BtnFilterPropsType = {
  isSidebar: boolean;
};

const BtnFilter = memo(({ isSidebar }: BtnFilterPropsType) => {
  const { pending } = useFormStatus();

  return isSidebar ? (
    <Button
      type="submit"
      size="xs"
      variant="light"
      w={208}
      aria-label="Form submit"
      loading={pending}
      disabled={pending}
      c={pending ? undefined : "indigo.7"}
      leftSection={<IconFilterSearch size={20} />}
    >
      Filter
    </Button>
  ) : (
    <ActionIcon
      component="button"
      type="submit"
      size="xl"
      radius="xs"
      variant="subtle"
      aria-label="Form submit"
      loading={pending}
      disabled={pending}
      c={pending ? undefined : "indigo.7"}
    >
      <IconFilterSearch />
    </ActionIcon>
  );
});

export default BtnFilter;
