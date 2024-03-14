import Link from "next/link";
import { NavLink } from "@mantine/core";

type RouterLinkPropsType = {
  href: { pathname: string; query: { page: number } };
  label: string;
  active: boolean;
};

const RouterLinkComponent = (props: RouterLinkPropsType) => (
  <NavLink
    component={Link}
    {...props}
    variant="light"
    w={120}
    ta="center"
    tt="uppercase"
  />
);

export default RouterLinkComponent;
