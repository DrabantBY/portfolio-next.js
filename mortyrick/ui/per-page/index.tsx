"use client";

import { memo } from "react";
import { Pagination } from "@mantine/core";
import usePerPage from "@/lib/hooks/use-per-page";
import type { PageSearchParamsType, RouteParamsType } from "@/types/url-params";

type PerPagePropsType = {
  route: RouteParamsType;
  searchParams: PageSearchParamsType;
  total: number;
};

const PerPage = memo(({ route, searchParams, total }: PerPagePropsType) => {
  const { page, setPage } = usePerPage(route, searchParams);

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
});

export default PerPage;
