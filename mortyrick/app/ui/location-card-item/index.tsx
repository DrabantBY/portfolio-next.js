import { memo } from 'react';
import { Card } from '@mantine/core';
import type { LocationDataType } from '@/app/types/data';

const LocationCardItem = memo(({ result }: { result: LocationDataType }) => {
  return (
    <Card shadow="lg" padding="xs">
      <span>{result.name}</span>
      <span>{result.type}</span>
      <span>{result.dimension}</span>
    </Card>
  );
});

export default LocationCardItem;
