import { Container, Group } from "@mantine/core";

import Navigation from "../ui/navigation";
import LogoLink from "../ui/logo-link";
import BtnTheme from "../ui/btn-theme";
import BtnBurger from "../ui/btn-burger";

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
