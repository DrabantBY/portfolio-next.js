"use client";

import { usePathname } from "next/navigation";
import { Group } from "@mantine/core";
import RouterLink from "../route-link";

const routes = [
  { pathname: "/character", query: { page: 1 } },
  { pathname: "/episode", query: { page: 1 } },
  { pathname: "/location", query: { page: 1 } },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Group justify="center" gap="xs" visibleFrom="sm">
      {routes.map((route, index) => (
        <RouterLink
          key={index}
          href={route}
          label={route.pathname.slice(1)}
          active={pathname === route.pathname}
        />
      ))}
    </Group>
  );
};

export default Navigation;
