import { Metadata } from "next";
import { Suspense } from "react";
import { Container, Flex } from "@mantine/core";
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

export default async function Page(routeParams: UrlParamsType) {
  const { route } = routeParams.params;
  const { info, results } = await fetchDataPage(routeParams);
  const isEmptyResults = results.length === 0;
  const suspenseKey = new URLSearchParams(routeParams.searchParams);

  return (
    <Container size="xl">
      <Flex
        justify={{ md: "space-between" }}
        align="center"
        wrap="wrap"
        gap="md"
        mb="xl"
      >
        <FilterForm route={route} isSidebar={false} />
        {isEmptyResults ? null : (
          <PerPage
            route={route}
            searchParams={routeParams.searchParams}
            total={info.pages}
            count={info.count}
            amount={results.length}
          />
        )}
      </Flex>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        <Cards results={results} route={isEmptyResults ? null : route} />
      </Suspense>
    </Container>
  );
}
