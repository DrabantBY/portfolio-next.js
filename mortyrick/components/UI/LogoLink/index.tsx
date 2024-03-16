import Link from "next/link";
import { NavLink } from "@mantine/core";
import LogoIcon from "../LogoIcon";

type LogoLinkPropsType = {
  active: boolean;
};

export default function LogoLink(props: LogoLinkPropsType) {
  return (
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
}
