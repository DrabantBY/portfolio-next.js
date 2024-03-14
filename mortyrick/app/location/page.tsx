import { Container } from "@mantine/core";

import { getUrlWithSearchParams } from "@/utils/handleUrlWithSearchParams";

import { DataType } from "@/types/data";

export type LocationPageSearchParamsType = {
  page?: string;
  name?: string;
  type?: string;
  dimension?: string;
};

type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

type LocationDataType = DataType<LocationType>;

async function getLocationData(
  searchParams: LocationPageSearchParamsType
): Promise<LocationDataType> {
  const url = getUrlWithSearchParams("location", searchParams);
  const response = await fetch(url);
  const locations = (await response.json()) as Promise<LocationDataType>;
  return locations;
}

export default async function LocationPage({
  searchParams,
}: {
  searchParams: LocationPageSearchParamsType;
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
