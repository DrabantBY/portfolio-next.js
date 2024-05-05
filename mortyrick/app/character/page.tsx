import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container, Flex } from '@mantine/core';
import FormFilterCharacter from '../ui/form-filter-character';
import Paginator from '../ui/paginator';
import CharacterCardList from '../ui/character-card-list';
import Spinner from '../ui/spinner';
import DataEmpty from '../ui/data-empty';
import fetchCharacter from '../lib/fetch/fetch-character';
import type { PageCharacterSearchParamsType } from '../types/page';

export const metadata: Metadata = {
  title: 'page | character',
  description: 'data from https://rickandmortyapi.com/character',
};

export default async function PageCharacter({
  searchParams,
}: {
  searchParams: PageCharacterSearchParamsType;
}) {
  const data = await fetchCharacter(searchParams);
  const suspenseKey = new URLSearchParams(searchParams);

  return (
    <Container size="xl">
      <Flex justify={{ md: 'space-between' }} align="center" wrap="wrap" gap="md" mb="xl">
        <FormFilterCharacter sidebar={false} />
        {data ? <Paginator total={data.info.pages} /> : null}
      </Flex>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        {data ? <CharacterCardList results={data.results} /> : <DataEmpty />}
      </Suspense>
    </Container>
  );
}
