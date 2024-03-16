import { Metadata } from "next";
import { Container } from "@mantine/core";
import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";
import type { LocationSearchParamsType, LocationDataType } from "./types";

export const metadata: Metadata = {
  title: "page | location",
  description: "current route",
};

async function getLocationData(
  searchParams: LocationSearchParamsType
): Promise<LocationDataType> {
  const url = getUrlWithSearchParams("location", searchParams);
  const response = await fetch(url);
  const locations = (await response.json()) as Promise<LocationDataType>;
  return locations;
}

export default async function LocationPage({
  searchParams,
}: {
  searchParams: LocationSearchParamsType;
}) {
  const { results } = await getLocationData(searchParams);

  return (
    <Container size="xl">
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </Container>
  );
}
