"use client";

import { memo } from "react";
import { usePathname } from "next/navigation";
import { Flex } from "@mantine/core";
import RouterLink from "../route-link";

const routes = [
  { pathname: "/character", query: { page: 1 } },
  { pathname: "/episode", query: { page: 1 } },
  { pathname: "/location", query: { page: 1 } },
];

const Navigation = memo(({ place }: { place: "header" | "sidebar" }) => {
  const pathname = usePathname();

  return (
    <Flex
      align={{ base: "flex-start", sm: "center" }}
      direction={{ base: "column", sm: "row" }}
      gap={{ base: 0, sm: "xs" }}
      visibleFrom={place === "header" ? "sm" : undefined}
    >
      {routes.map((route, index) => (
        <RouterLink
          key={index}
          href={route}
          label={route.pathname.slice(1)}
          active={pathname === route.pathname}
          isRightSection={place === "sidebar"}
        />
      ))}
    </Flex>
  );
});

export default Navigation;
