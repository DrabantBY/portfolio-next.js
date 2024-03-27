"use client";

import usePerPage from "@/lib/hooks/use-per-page";

import { Pagination } from "@mantine/core";

export default function PerPage({ total }: { total: number }) {
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
      color="indigo.5"
      // getItemProps={getNextLink}
    />
  );
}
