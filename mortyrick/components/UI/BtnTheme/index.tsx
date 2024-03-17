"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export default function BtnTheme() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="light"
      size="xl"
      radius="xl"
      onClick={toggleColorScheme}
    >
      <IconSun className="light" />
      <IconMoonStars className="dark" />
    </ActionIcon>
  );
}
