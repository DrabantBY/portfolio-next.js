import { memo } from 'react';
import { Card } from '@mantine/core';
import type { EpisodeDataType } from '@/app/types/data';

const EpisodeCardItem = memo(({ result }: { result: EpisodeDataType }) => {
  return (
    <Card shadow="lg" padding="xs">
      <span>{result.name}</span>
      <span>{result.episode}</span>
    </Card>
  );
});

export default EpisodeCardItem;
