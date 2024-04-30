import { memo } from 'react';
import { useFormStatus } from 'react-dom';
import { ActionIcon, Button } from '@mantine/core';
import { IconFilterSearch } from '@tabler/icons-react';

const BtnFilter = memo(({ sidebar }: { sidebar: boolean }) => {
  const { pending } = useFormStatus();

  return sidebar ? (
    <Button
      type="submit"
      size="xs"
      variant="light"
      w={208}
      aria-label="Form submit"
      loading={pending}
      disabled={pending}
      leftSection={<IconFilterSearch size={20} />}>
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
      disabled={pending}>
      <IconFilterSearch />
    </ActionIcon>
  );
});

export default BtnFilter;
