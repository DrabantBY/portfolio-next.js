import Link from "next/link";
import { NavLink } from "@mantine/core";
import { IconApi } from "@tabler/icons-react";
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
      rightSection={<IconApi size={30} />}
      label="morty&rick"
      {...props}
      variant="subtle"
      w="fit-content"
      ta="center"
      tt="uppercase"
    />
  );
}
