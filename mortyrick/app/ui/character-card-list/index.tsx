import { memo } from 'react';
import { SimpleGrid } from '@mantine/core';
import type { CharacterDataType } from '@/app/types/data';
import CharacterCardItem from '../character-card-item';

const CharacterCardList = memo(({ results }: { results: CharacterDataType[] }) => {
  return (
    <SimpleGrid cols={{ base: 4, xs: 6, sm: 8 }} spacing="sm">
      {results.map((result) => (
        <CharacterCardItem key={result.id} result={result} />
      ))}
    </SimpleGrid>
  );
});

export default CharacterCardList;
