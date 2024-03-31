"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navigation from "../navigation";

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
        size="xs"
        offset={5}
        radius="xs"
        closeButtonProps={{ "aria-label": "Close sidebar" }}
      >
        <Navigation place="sidebar" />
      </Drawer>
      <Burger
        opened={false}
        onClick={open}
        size="md"
        color="indigo.4"
        hiddenFrom="sm"
        aria-label="Open sidebar"
      />
    </>
  );
}
