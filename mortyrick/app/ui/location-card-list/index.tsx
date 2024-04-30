import { memo } from 'react';
import LocationCardItem from '../location-card-item';
import type { LocationDataType } from '@/app/types/data';

const LocationCardList = memo(({ results }: { results: LocationDataType[] }) => {
  return (
    <div>
      {results.map((result) => (
        <LocationCardItem key={result.id} result={result} />
      ))}
    </div>
  );
});

export default LocationCardList;
