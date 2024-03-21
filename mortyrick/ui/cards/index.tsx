import { SimpleGrid } from "@mantine/core";

import CharacterCard from "./character-card";
import EpisodeCard from "./episode-card";
import LocationCard from "./location-card";

import getDataByRoute from "@/lib/fetch/fetch-data-page";

import type { UrlParamsType } from "@/types/urlParams";

export default async function Cards({
  routeParams,
}: {
  routeParams: UrlParamsType;
}) {
  const { route } = routeParams.params;
  const { results } = await getDataByRoute(routeParams);

  switch (route) {
    case "character":
      return (
        <SimpleGrid cols={5} spacing="lg" verticalSpacing="lg">
          {results.map((result) => (
            <CharacterCard key={result.id} {...result} />
          ))}
        </SimpleGrid>
      );
    case "episode":
      return <EpisodeCard results={results} />;
    case "location":
      return <LocationCard results={results} />;
  }
}
