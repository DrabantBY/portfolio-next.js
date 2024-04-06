import { SimpleGrid } from "@mantine/core";
import CharacterCard from "./character-card";
import EpisodeCard from "./episode-card";
import LocationCard from "./location-card";
import EmptyData from "../empty-data";
import type { RouteParamsType } from "@/types/url-params";
import type { ResultsDataType } from "@/types/data";

type CardsPropsType = {
  route: RouteParamsType | null;
  results: ResultsDataType;
};

export default async function Cards({ route, results }: CardsPropsType) {
  switch (route) {
    case "character":
      return (
        <SimpleGrid
          cols={{ base: 2, xs: 3, sm: 4, lg: 5 }}
          spacing="lg"
          verticalSpacing="lg"
        >
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
      return <EmptyData />;
  }
}
