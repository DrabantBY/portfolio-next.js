import { Container } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morty & Rick",
  description: "data from https://rickandmortyapi.com/",
};

export default function MainPage() {
  return (
    <Container size="xl">
      <h1>Hello NEXT</h1>
    </Container>
  );
}
