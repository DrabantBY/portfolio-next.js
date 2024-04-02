"use client";

import { memo } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Flex } from "@mantine/core";
import SearchField from "./search-field";
import SelectField from "./select-field";
import BtnFilter from "./btn-filter";
import filterDataAction from "@/lib/actions/filter-action";
import type { RouteParamsType } from "@/types/url-params";

type FilterFormPropsType = {
  isSidebar: boolean;
  route: RouteParamsType;
};

const FilterForm = memo(({ route, isSidebar }: FilterFormPropsType) => {
  const searchParams = useSearchParams();

  return (
    <Box visibleFrom={isSidebar ? undefined : "md"}>
      <form action={filterDataAction.bind(null, route)}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "xs", md: 0 }}
          align={{ base: "flex-start", md: "center" }}
        >
          <SearchField
            label="name"
            defaultValue={searchParams.get("name") ?? ""}
          />
          {route !== "episode" ? (
            <SearchField
              label="type"
              defaultValue={searchParams.get("type") ?? ""}
            />
          ) : null}
          {route === "episode" ? (
            <SearchField
              label="episode"
              defaultValue={searchParams.get("episode") ?? ""}
            />
          ) : null}
          {route === "location" ? (
            <SearchField
              label="dimension"
              defaultValue={searchParams.get("dimension") ?? ""}
            />
          ) : null}
          {route === "character" ? (
            <SearchField
              label="species"
              defaultValue={searchParams.get("species") ?? ""}
            />
          ) : null}
          {route === "character" ? (
            <SelectField
              label="status"
              defaultValue={searchParams.get("status")}
              options={["alive", "dead", "unknown"]}
            />
          ) : null}
          {route === "character" ? (
            <SelectField
              label="gender"
              defaultValue={searchParams.get("gender")}
              options={["female", "male", "genderless", "unknown"]}
            />
          ) : null}

          <BtnFilter isSidebar={isSidebar} />
        </Flex>
      </form>
    </Box>
  );
});

export default FilterForm;
