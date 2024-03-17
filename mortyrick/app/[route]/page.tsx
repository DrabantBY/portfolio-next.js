import { Metadata } from "next";

import { Container, SimpleGrid } from "@mantine/core";

import CharacterCard from "@/components/CharacterCard";
import EpisodeCard from "@/components/EpisodeCard";
import LocationCard from "@/components/LocationCard";
import PerPage from "@/components/UI/PerPage";

import getDataByRoute from "@/fetch/getDataByRoute";

import type { RouteParamsType } from "@/types/routeParams";
import { Suspense } from "react";

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
      <PerPage total={info.pages} />
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
