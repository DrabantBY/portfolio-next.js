import { Metadata } from "next";
import { Container } from "@mantine/core";
import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";
import type { CharacterDataType, CharacterSearchParamsType } from "./types";

export const metadata: Metadata = {
  title: "page | character",
  description: "current route",
};

async function getCharacterData(
  searchParams: CharacterSearchParamsType
): Promise<CharacterDataType> {
  const url = getUrlWithSearchParams("character", searchParams);
  const response = await fetch(url);
  const characters = await response.json();
  return characters;
}

export default async function CharacterPage({
  searchParams,
}: {
  searchParams: CharacterSearchParamsType;
}) {
  const { results } = await getCharacterData(searchParams);

  return (
    <Container size="xl">
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </Container>
  );
}
