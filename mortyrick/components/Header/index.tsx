"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { Container, Group } from "@mantine/core";

import RouterLinkComponent from "../UI/RouterLink";
import LogoLink from "../UI/LogoLink";

const routes = ["character", "episode", "location"];

export default function HeaderComponent() {
  const segment = useSelectedLayoutSegment();

  return (
    <header>
      <Container size="xl" py="sm">
        <Group justify="space-between">
          <LogoLink active={!segment} />
          <Group justify="center" gap="xs">
            {routes.map((route) => (
              <RouterLinkComponent
                key={route}
                href={route}
                label={route}
                active={segment === route}
              />
            ))}
          </Group>
        </Group>
      </Container>
    </header>
  );
}
