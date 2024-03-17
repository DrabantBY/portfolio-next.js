"use client";

import { usePathname } from "next/navigation";
import { Container, Group } from "@mantine/core";
import RouterLink from "../UI/RouterLink";
import LogoLink from "../UI/LogoLink";
import BtnTheme from "../UI/BtnTheme";
import BtnBurger from "../UI/BtnBurger";

const routes = ["character", "episode", "location"];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Container size="xl" py="sm">
        <Group justify="space-between">
          <LogoLink active={pathname === "/"} />
          <Group justify="center" gap="xs">
            {routes.map((route) => (
              <RouterLink
                key={route}
                href={`/${route}`}
                label={route}
                active={pathname === `/${route}`}
              />
            ))}
          </Group>
          <BtnTheme />
          <BtnBurger />
        </Group>
      </Container>
    </header>
  );
}
