import { Container } from "@mantine/core";

import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";

import type { DataType } from "@/types/data";

export type EpisodePageSearchParamsType = {
  page?: string;
  name?: string;
  episode?: string;
};

type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

type EpisodeDataType = DataType<EpisodeType>;

async function getEpisodeData(
  searchParams: EpisodePageSearchParamsType
): Promise<EpisodeDataType> {
  const url = getUrlWithSearchParams("episode", searchParams);
  const response = await fetch(url);
  const episodes = (await response.json()) as Promise<EpisodeDataType>;
  return episodes;
}

export default async function EpisodePage({
  searchParams,
}: {
  searchParams: EpisodePageSearchParamsType;
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
