'use client';

import { memo } from 'react';
import { Pagination } from '@mantine/core';
import usePerPage from '@/app/lib/hooks/use-per-page';

const DataPagination = memo(({ total }: { total: number }) => {
  const { page, setPage } = usePerPage();

  // const getNextLink = (page: number) => {
  //   const href = setHref(page);
  //   return {
  //     component: (props: Record<string, any>) => (
  //       <Link href={href} {...props} />
  //     ),
  //   };
  // };

  return (
    <Pagination
      value={page}
      onChange={setPage}
      total={total}
      size="sm"
      radius="sm"
      withControls={false}
      color="indigo.4"
      // getItemProps={getNextLink}
    />
  );
});

export default DataPagination;
