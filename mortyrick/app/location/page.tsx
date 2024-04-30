import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container, Flex } from '@mantine/core';
import FormFilterLocation from '../ui/form-filter-location';
import LocationCardList from '../ui/location-card-list';
import DataPagination from '../ui/data-pagination';
import DataEmpty from '../ui/data-empty';
import Spinner from '../ui/spinner';
import fetchLocation from '../lib/fetch/fetch-location';
import type { PageLocationSearchParamsType } from '../types/page';

export const metadata: Metadata = {
  title: 'page | location',
  description: 'data from https://rickandmortyapi.com/location',
};

export default async function PageLocation({
  searchParams,
}: {
  searchParams: PageLocationSearchParamsType;
}) {
  const { info, results } = await fetchLocation(searchParams);
  const suspenseKey = new URLSearchParams(searchParams);

  return (
    <Container size="xl">
      <Flex justify={{ md: 'space-between' }} align="center" wrap="wrap" gap="md" mb="xl">
        <FormFilterLocation sidebar={false} />
        {results.length === 0 ? null : <DataPagination total={info.pages} />}
      </Flex>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        {results.length === 0 ? <DataEmpty /> : <LocationCardList results={results} />}
      </Suspense>
    </Container>
  );
}
