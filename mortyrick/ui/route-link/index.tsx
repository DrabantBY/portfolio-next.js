import Link from "next/link";
import { NavLink } from "@mantine/core";

type RouteLinkPropsType = {
  href: { pathname: string; query: { page: number } };
  label: string;
  active: boolean;
};

export default function RouteLink(props: RouteLinkPropsType) {
  return (
    <NavLink
      component={Link}
      {...props}
      variant="light"
      w={120}
      ta="center"
      tt="uppercase"
    />
  );
}
