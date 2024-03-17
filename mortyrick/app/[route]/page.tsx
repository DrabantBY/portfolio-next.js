import { Metadata } from "next";

import { Container } from "@mantine/core";

import CharacterCard from "@/components/CharacterCard";
import EpisodeCard from "@/components/EpisodeCard";
import LocationCard from "@/components/LocationCard";

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
  const { results } = await getDataByRoute(routeParams);

  return (
    <Container size="xl">
      {route === "character" && <CharacterCard results={results} />}
      {route === "episode" && <EpisodeCard results={results} />}
      {route === "location" && <LocationCard results={results} />}
    </Container>
  );
}
