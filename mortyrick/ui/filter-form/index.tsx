"use client";

import { memo } from "react";
import { ActionIcon, Box, Button, Flex } from "@mantine/core";
import SearchField from "./search-field";
import SelectField from "./select-field";
import BtnFilter from "./btn-filter";
import BtnReset from "./btn-reset";

import filterDataAction from "@/lib/actions/filter-action";
import { RouteParamsType } from "@/types/url-params";

type FilterFormPropsType = {
  isSidebar: boolean;
  route: RouteParamsType;
};

const FilterForm = memo(({ route, isSidebar }: FilterFormPropsType) => {
  return (
    <Box visibleFrom={isSidebar ? undefined : "md"}>
      <form action={filterDataAction.bind(null, route)}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "xs", md: 0 }}
        >
          <SearchField label="name" />
          {route !== "episode" ? <SearchField label="type" /> : null}
          {route === "episode" ? <SearchField label="episode" /> : null}
          {route === "location" ? <SearchField label="dimension" /> : null}
          {route === "character" ? <SearchField label="species" /> : null}
          {route === "character" ? (
            <SelectField
              label="status"
              options={["alive", "dead", "unknown"]}
            />
          ) : null}
          {route === "character" ? (
            <SelectField
              label="gender"
              options={["female", "male", "genderless", "unknown"]}
            />
          ) : null}

          {isSidebar ? (
            <Button.Group orientation="horizontal">
              <BtnFilter isSidebar={isSidebar} />
              <BtnReset isSidebar={isSidebar} onReset={() => {}} />
            </Button.Group>
          ) : (
            <ActionIcon.Group orientation="vertical">
              <BtnFilter isSidebar={isSidebar} />
              <BtnReset isSidebar={isSidebar} onReset={() => {}} />
            </ActionIcon.Group>
          )}
        </Flex>
      </form>
    </Box>
  );
});

export default FilterForm;
