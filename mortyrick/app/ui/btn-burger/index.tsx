'use client';

import { Burger, Divider, Drawer, Group, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navigation from '../navigation';
import FormFilterSidebar from '../form-filter-sidebar';

export default function BtnBurger() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        hiddenFrom="md"
        opened={opened}
        onClose={close}
        title={
          <Group gap="xs">
            Navigation
            <Divider size="md" orientation="vertical" />
            Filter
          </Group>
        }
        position="right"
        size={250}
        offset={5}
        radius="xs"
        closeButtonProps={{ 'aria-label': 'Close sidebar' }}>
        <Navigation place="sidebar" />
        <Space h="xl" />
        <FormFilterSidebar />
      </Drawer>
      <Burger
        opened={false}
        onClick={open}
        size="md"
        color="indigo.4"
        hiddenFrom="md"
        aria-label="Open sidebar"
      />
    </>
  );
}
