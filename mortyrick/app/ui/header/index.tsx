import { Container, Group } from '@mantine/core';
import Navigation from '../navigation';
import LogoLink from '../logo-link';
import BtnTheme from '../btn-theme';
import BtnBurger from '../btn-burger';

export default function Header() {
  return (
    <header>
      <Container size="xl" py="xs">
        <Group justify="space-between">
          <LogoLink />
          <Navigation place="header" />
          <Group>
            <BtnTheme />
            <BtnBurger />
          </Group>
        </Group>
      </Container>
    </header>
  );
}
