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
  const suspenseKey = new URLSearchParams(routeParams.searchParams);
  const { route } = routeParams.params;
  const data = await fetchDataPage(routeParams);
  const isEmpty = "error" in data;

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
        {!isEmpty ? (
          <PerPage
            route={route}
            searchParams={routeParams.searchParams}
            total={data.info.pages}
            count={data.info.count}
            amount={data.results.length}
          />
        ) : null}
      </Flex>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        {isEmpty ? (
          <h1>{data.error}</h1>
        ) : (
          <Cards results={data.results} route={route} />
        )}
      </Suspense>
    </Container>
  );
}
