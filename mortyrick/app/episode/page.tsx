import { Metadata } from "next";
import { Container } from "@mantine/core";
import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";
import type { EpisodeSearchParamsType, EpisodeDataType } from "./types";

export const metadata: Metadata = {
  title: "page | episode",
  description: "current route",
};

async function getEpisodeData(
  searchParams: EpisodeSearchParamsType
): Promise<EpisodeDataType> {
  const url = getUrlWithSearchParams("episode", searchParams);
  const response = await fetch(url);
  const episodes = (await response.json()) as Promise<EpisodeDataType>;
  return episodes;
}

export default async function EpisodePage({
  searchParams,
}: {
  searchParams: EpisodeSearchParamsType;
}) {
  const { results } = await getEpisodeData(searchParams);

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
