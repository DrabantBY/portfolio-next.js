import { memo } from 'react';
import EpisodeCardItem from '../episode-card-item';
import type { EpisodeDataType } from '@/app/types/data';

const EpisodeCardList = memo(({ results }: { results: EpisodeDataType[] }) => {
  return (
    <div>
      {results.map((result) => (
        <EpisodeCardItem key={result.id} result={result} />
      ))}
    </div>
  );
});

export default EpisodeCardList;
