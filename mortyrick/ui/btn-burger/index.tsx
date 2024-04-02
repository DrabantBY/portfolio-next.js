"use client";

import { useParams } from "next/navigation";
import { Burger, Divider, Drawer, Group, Space } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navigation from "../navigation";
import FilterForm from "../filter-form";
import type { RouteParamsType } from "@/types/url-params";

export default function BtnBurger() {
  const [opened, { open, close }] = useDisclosure(false);
  const { route } = useParams<{ route: RouteParamsType }>();

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
        closeButtonProps={{ "aria-label": "Close sidebar" }}
      >
        <Navigation place="sidebar" />
        <Space h="xl" />
        {route ? (
          <FilterForm key={route} route={route} isSidebar={true} />
        ) : null}
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
