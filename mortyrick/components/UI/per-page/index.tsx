"use client";

import usePerPageNavigation from "@/hooks/usePerPageNavigation";

import { Pagination } from "@mantine/core";

type PerPagePropsType = {
  total: number;
};

export default function PerPage({ total }: PerPagePropsType) {
  const { page, navigatePerPage } = usePerPageNavigation();

  return (
    <Pagination
      defaultValue={page}
      total={total}
      onChange={navigatePerPage}
      size="sm"
      radius="sm"
      withControls={false}
    ></Pagination>
  );
}
