import { Metadata } from "next";
import { Suspense } from "react";

import { Container, Group } from "@mantine/core";

import FilterForm from "@/ui/filter-form";
import PerPage from "@/ui/per-page";
import Cards from "@/ui/cards";
import Spinner from "@/ui/spinner";

import fetchDataPage from "@/lib/fetch/fetch-data-page";

import type { UrlParamsType } from "@/types/urlParams";

export async function generateMetadata({
  params,
}: UrlParamsType): Promise<Metadata> {
  const { route } = params;

  return {
    title: `page | ${route} `,
    description: `navigation by route ${route}`,
  };
}

export default async function Page(routeParams: UrlParamsType) {
  const { info, results } = await fetchDataPage(routeParams);
  console.log(info, results);
  const { route } = routeParams.params;
  const suspenseKey = new URLSearchParams(routeParams.searchParams);

  return (
    <Container size="xl">
      <Group justify="space-between" gap="xs" mb="md">
        <FilterForm />
        <PerPage total={info.pages} />
      </Group>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        <Cards results={results} route={route} />
      </Suspense>
    </Container>
  );
}
