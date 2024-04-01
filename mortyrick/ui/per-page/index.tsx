"use client";

import { memo } from "react";
import { Pagination, Group, Progress, Divider, Flex } from "@mantine/core";
import usePerPage from "@/lib/hooks/use-per-page";
import type { PageSearchParamsType, RouteParamsType } from "@/types/url-params";

type PerPagePropsType = {
  route: RouteParamsType;
  searchParams: PageSearchParamsType;
  total: number;
  count: number;
  amount: number;
};

const pageSize = 20;

const PerPage = memo(
  ({ route, searchParams, total, count, amount }: PerPagePropsType) => {
    const { page, setPage } = usePerPage(route, searchParams);
    const currentCount = (page - 1) * pageSize + amount;
    const progressValue = (currentCount / count) * 100;

    // const getNextLink = (page: number) => {
    //   const href = setHref(page);
    //   return {
    //     component: (props: Record<string, any>) => (
    //       <Link href={href} {...props} />
    //     ),
    //   };
    // };

    return (
      <Flex
        justify={{ base: "space-between", md: "center" }}
        align="center"
        direction={{ base: "row", md: "column" }}
        gap="xs"
        w={{ base: "100%", md: "auto" }}
      >
        <Group>
          {currentCount}
          <Divider orientation="vertical" size="md" />
          <Progress
            radius="xs"
            size="xl"
            w={100}
            value={progressValue}
            color="yellow.7"
          />
          <Divider orientation="vertical" size="md" />
          {count}
        </Group>

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
      </Flex>
    );
  }
);

export default PerPage;
