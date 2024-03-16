import type { Metadata } from "next";
import { Container } from "@mantine/core";

export const metadata: Metadata = {
  title: "Morty & Rick",
  description: "api from https://rickandmortyapi.com/",
};

export default function MainPage() {
  return (
    <Container size="xl">
      <h1>Hello NEXT</h1>
    </Container>
  );
}
