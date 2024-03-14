import { Button, Container, Group } from "@mantine/core";

const links = [
  {
    label: "docs",
    href: "https://rickandmortyapi.com/documentation",
  },
  {
    label: "about",
    href: "https://rickandmortyapi.com/about",
  },
  {
    label: "boost",
    href: "https://rickandmortyapi.com/support-us",
  },
];

export default function FooterComponent() {
  return (
    <Container size="xl" py="sm">
      <Group justify="center" gap="xl">
        {links.map(({ label, href }) => (
          <Button
            key={label}
            component="a"
            href={href}
            target="_blank"
            w={100}
            tt="uppercase"
            size="xs"
            variant="outline"
          >
            {label}
          </Button>
        ))}
      </Group>
    </Container>
  );
}
