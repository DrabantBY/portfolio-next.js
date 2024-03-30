import { Metadata } from "next";
import { Suspense } from "react";

import { Container, Group } from "@mantine/core";

import FilterForm from "@/ui/filter-form";
import PerPage from "@/ui/per-page";
import Cards from "@/ui/cards";
import Spinner from "@/ui/spinner";

import fetchDataPage from "@/lib/fetch/fetch-data-page";

import type { UrlParamsType } from "@/types/url-params";

export async function generateMetadata({
  params,
}: UrlParamsType): Promise<Metadata> {
  const { route } = params;

  return {
    title: `page | ${route} `,
    description: `navigation by route ${route}`,
  };
}

export default async function Page(routeParams: any) {
  const { info, results } = await fetchDataPage(routeParams);
  const { route } = routeParams.params;
  const suspenseKey = new URLSearchParams(routeParams.searchParams);

  return (
    <Container size="xl">
      <Group justify="space-between" gap="xs" mb="md">
        <FilterForm route={route} searchParams={routeParams.searchParams} />
        <PerPage
          route={route}
          searchParams={routeParams.searchParams}
          total={info.pages}
        />
      </Group>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        <Cards results={results} route={route} />
      </Suspense>
    </Container>
  );
}
