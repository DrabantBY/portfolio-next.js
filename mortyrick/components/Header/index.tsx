"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { Container, Group } from "@mantine/core";

import RouterLinkComponent from "../UI/RouterLink";
import LogoLink from "../UI/LogoLink";

const routers = [
  { pathname: "character", query: { page: 1 } },
  { pathname: "location", query: { page: 1 } },
  { pathname: "episode", query: { page: 1 } },
];

const HeaderComponent = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <header>
      <Container size="xl" py="sm">
        <Group justify="space-between">
          <LogoLink active={!segment} />
          <Group justify="center" gap="xs">
            {routers.map((router) => (
              <RouterLinkComponent
                key={router.pathname}
                href={router}
                label={router.pathname}
                active={segment === router.pathname}
              />
            ))}
          </Group>
        </Group>
      </Container>
    </header>
  );
};
export default HeaderComponent;
