"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function BtnBurger() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        hiddenFrom="sm"
        opened={opened}
        onClose={close}
        title="Navigation/Filter"
        position="right"
        size="sm"
        offset={5}
        radius="xs"
        closeButtonProps={{ "aria-label": "Close sidebar" }}
      >
        {/* Drawer content */}
      </Drawer>
      <Burger
        opened={false}
        onClick={open}
        size="md"
        color="blue.3"
        hiddenFrom="sm"
        aria-label="Open sidebar"
      />
    </>
  );
}
