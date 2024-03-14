import { Container } from "@mantine/core";

import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";

import type { DataType } from "@/types/data";

export type CharacterPageSearchParamsType = {
  page?: string;
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
};

type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterDataType = DataType<CharacterType>;

async function getCharacterData(
  searchParams: CharacterPageSearchParamsType
): Promise<CharacterDataType> {
  const url = getUrlWithSearchParams("character", searchParams);
  const response = await fetch(url);
  const characters = (await response.json()) as Promise<CharacterDataType>;
  return characters;
}

export default async function CharacterPage({
  searchParams,
}: {
  searchParams: CharacterPageSearchParamsType;
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
