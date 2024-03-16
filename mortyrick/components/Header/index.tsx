"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { Container, Group } from "@mantine/core";
import RouterLink from "../UI/RouterLink";
import LogoLink from "../UI/LogoLink";
import BtnTheme from "../UI/BtnTheme";

const routes = ["character", "episode", "location"];

export default function Header() {
  const segment = useSelectedLayoutSegment();

  return (
    <header>
      <Container size="xl" py="sm">
        <Group justify="space-between">
          <LogoLink active={!segment} />
          <Group justify="center" gap="xs">
            {routes.map((route) => (
              <RouterLink
                key={route}
                href={route}
                label={route}
                active={segment === route}
              />
            ))}
          </Group>
          <BtnTheme />
        </Group>
      </Container>
    </header>
  );
}
