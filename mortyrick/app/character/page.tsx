import { Metadata } from "next";
import { Container, Grid } from "@mantine/core";
import type {
  CharacterDataType,
  CharacterSearchParamsType,
} from "@/types/character";
import CharacterCard from "@/components/CharacterCard";
import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";

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
      <Grid gutter="md">
        {results.map((result) => (
          <CharacterCard key={result.id} {...result}></CharacterCard>
        ))}
      </Grid>
    </Container>
  );
}
