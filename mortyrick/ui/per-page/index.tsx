"use client";

import usePerPage from "@/lib/hooks/use-per-page";

import { Pagination } from "@mantine/core";
import Link from "next/link";

type PerPagePropsType = {
  total: number;
};

export default function PerPage({ total }: PerPagePropsType) {
  const { currentPage, setHref } = usePerPage();

  const getNextLink = (page: number) => {
    const href = setHref(page);
    return {
      component: (props: Record<string, any>) => (
        <Link href={href} {...props} />
      ),
    };
  };

  return (
    <Pagination
      defaultValue={currentPage}
      total={total}
      size="sm"
      radius="sm"
      withControls={false}
      getItemProps={getNextLink}
    />
  );
}
