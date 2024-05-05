'use client';

import { memo } from 'react';
import { Pagination } from '@mantine/core';
import usePaginator from '@/app/lib/hooks/use-paginator';

const Paginator = memo(({ total }: { total: number }) => {
  const { page, setPage } = usePaginator();

  return (
    <Pagination
      value={page}
      onChange={setPage}
      total={total}
      size="sm"
      radius="sm"
      withControls={false}
      color="indigo.4"
    />
  );
});

export default Paginator;
