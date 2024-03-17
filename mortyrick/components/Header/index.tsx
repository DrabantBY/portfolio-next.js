import { Container, Group } from "@mantine/core";

import Navigation from "../UI/Navigation";
import LogoLink from "../UI/LogoLink";
import BtnTheme from "../UI/BtnTheme";
import BtnBurger from "../UI/BtnBurger";

export default function Header() {
  return (
    <header className="background-theme">
      <Container size="xl" py="xs">
        <Group justify="space-between">
          <LogoLink />
          <Navigation />
          <BtnTheme />
          <BtnBurger />
        </Group>
      </Container>
    </header>
  );
}
