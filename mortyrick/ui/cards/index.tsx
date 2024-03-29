import { SimpleGrid } from "@mantine/core";

import CharacterCard from "./character-card";
import EpisodeCard from "./episode-card";
import LocationCard from "./location-card";

import { RouteParamsType } from "@/types/url-params";
import { ResultsDataType } from "@/types/data";

type CardsPropsType = {
  route: RouteParamsType;
  results: ResultsDataType;
};

export default async function Cards({ route, results }: CardsPropsType) {
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
    default:
      return null;
  }
}
