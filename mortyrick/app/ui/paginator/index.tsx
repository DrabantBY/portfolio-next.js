'use client';

import { memo } from 'react';
import { Pagination } from '@mantine/core';
import usePerPage from '@/app/lib/hooks/use-per-page';

const Paginator = memo(({ total }: { total: number }) => {
  const { page, setPage } = usePerPage();

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
