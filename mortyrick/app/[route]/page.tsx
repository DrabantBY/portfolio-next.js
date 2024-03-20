import { Metadata } from "next";

import { Container, Group, SimpleGrid } from "@mantine/core";

import CharacterCard from "@/components/cards/character-card";
import EpisodeCard from "@/components/cards/episode-card";
import LocationCard from "@/components/cards/location-card";
import FilterForm from "@/components/filter-form";
import PerPage from "@/components/ui/per-page";

import getDataByRoute from "@/fetch/getDataByRoute";

import type { RouteParamsType } from "@/types/routeParams";

export async function generateMetadata({
  params,
}: RouteParamsType): Promise<Metadata> {
  const { route } = params;

  return {
    title: `page | ${route} `,
    description: `navigation by route ${route}`,
  };
}

export default async function RoutePage(routeParams: RouteParamsType) {
  const { route } = routeParams.params;
  const { results, info } = await getDataByRoute(routeParams);

  return (
    <Container size="xl">
      <Group justify="flex-end" gap="xs" mb="md">
        <FilterForm />
        <PerPage total={info.pages} />
      </Group>

      {route === "character" && (
        <SimpleGrid cols={5} spacing="lg" verticalSpacing="lg">
          {results.map((result) => (
            <CharacterCard key={result.id} {...result} />
          ))}
        </SimpleGrid>
      )}
      {route === "episode" && <EpisodeCard results={results} />}
      {route === "location" && <LocationCard results={results} />}
    </Container>
  );
}
