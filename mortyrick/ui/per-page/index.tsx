"use client";

import usePerPage from "@/lib/hooks/use-per-page";

import { Pagination } from "@mantine/core";

type PerPagePropsType = {
  total: number;
};

export default function PerPage({ total }: PerPagePropsType) {
  const { page, navigatePerPage } = usePerPage();

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
