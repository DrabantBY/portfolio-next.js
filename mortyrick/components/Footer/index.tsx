import { Button, Container, Group } from "@mantine/core";
import {
  IconFileTypeDoc,
  IconUsers,
  IconPremiumRights,
  IconArrowBigRightLine,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      <Container size="xl" py="sm">
        <Group justify="center" gap="xl">
          <Button
            component="a"
            href="https://rickandmortyapi.com/documentation"
            target="_blank"
            w={120}
            tt="uppercase"
            size="xs"
            variant="outline"
            leftSection={<IconFileTypeDoc size={18} />}
            rightSection={<IconArrowBigRightLine size={18} />}
          >
            docs
          </Button>
          <Button
            component="a"
            href="https://rickandmortyapi.com/about"
            target="_blank"
            w={120}
            tt="uppercase"
            size="xs"
            variant="outline"
            leftSection={<IconUsers size={18} />}
            rightSection={<IconArrowBigRightLine size={18} />}
          >
            about
          </Button>

          <Button
            component="a"
            href="https://rickandmortyapi.com/support-us"
            target="_blank"
            w={120}
            tt="uppercase"
            size="xs"
            variant="outline"
            leftSection={<IconPremiumRights size={18} />}
            rightSection={<IconArrowBigRightLine size={18} />}
          >
            boost
          </Button>
        </Group>
      </Container>
    </footer>
  );
}
