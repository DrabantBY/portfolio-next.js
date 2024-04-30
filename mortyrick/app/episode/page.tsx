import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container, Flex } from '@mantine/core';
import FormFilterEpisode from '../ui/form-filter-episode';
import EpisodeCardList from '../ui/episode-card-list';
import DataPagination from '../ui/data-pagination';
import DataEmpty from '../ui/data-empty';
import Spinner from '../ui/spinner';
import fetchEpisode from '../lib/fetch/fetch-episode';
import type { PageEpisodeSearchParamsType } from '../types/page';

export const metadata: Metadata = {
  title: 'page | episode',
  description: 'data from https://rickandmortyapi.com/episode',
};

export default async function PageEpisode({
  searchParams,
}: {
  searchParams: PageEpisodeSearchParamsType;
}) {
  const data = await fetchEpisode(searchParams);
  const suspenseKey = new URLSearchParams(searchParams);

  return (
    <Container size="xl">
      <Flex justify={{ md: 'space-between' }} align="center" wrap="wrap" gap="md" mb="xl">
        <FormFilterEpisode sidebar={false} />
        {data ? <DataPagination total={data.info.pages} /> : null}
      </Flex>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        {data ? <EpisodeCardList results={data.results} /> : <DataEmpty />}
      </Suspense>
    </Container>
  );
}
