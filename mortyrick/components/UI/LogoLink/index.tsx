import Link from "next/link";
import { NavLink } from "@mantine/core";
import LogoIcon from "../LogoIcon";

type LogoLinkPropsType = {
  active: boolean;
};

const LogoLink = (props: LogoLinkPropsType) => (
  <NavLink
    component={Link}
    href="/"
    leftSection={<LogoIcon />}
    label="morty&rick"
    {...props}
    variant="light"
    w="fit-content"
    ta="center"
    tt="uppercase"
  />
);

export default LogoLink;
