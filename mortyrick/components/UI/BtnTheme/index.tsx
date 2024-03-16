import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import classes from "./styles.module.css";

export default function BtnTheme() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="light"
      size="xl"
      radius="xl"
      onClick={toggleColorScheme}
    >
      <IconSun className={classes.light} />
      <IconMoonStars className={classes.dark} />
    </ActionIcon>
  );
}
