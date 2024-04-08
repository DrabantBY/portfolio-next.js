import EmptyPage from "@/ui/empty-page";
import { Container, Center } from "@mantine/core";

export default function NotFound() {
  return (
    <Container size="xl" className="center">
      <Center>
        <EmptyPage />
      </Center>
    </Container>
  );
}
