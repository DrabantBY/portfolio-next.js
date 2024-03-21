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
      defaultValue={page}
      onChange={setPage}
      total={total}
      size="sm"
      radius="sm"
      withControls={false}
      // getItemProps={getNextLink}
    />
  );
}
