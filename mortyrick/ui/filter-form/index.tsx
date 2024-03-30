"use client";

import { memo } from "react";
import { ActionIcon } from "@mantine/core";
import SearchField from "./search-field";
import SelectField from "./select-field";
import BtnFilter from "./btn-filter";
import BtnReset from "./btn-reset";
import useFilterForm from "@/lib/hooks/use-filter-form";
import filterDataAction from "@/lib/actions/filter-action";
import type { PageSearchParamsType, RouteParamsType } from "@/types/url-params";
import classes from "./styles.module.css";

type FilterFormPropsType = {
  route: RouteParamsType;
  searchParams: PageSearchParamsType;
};

const FilterForm = memo(({ route, searchParams }: FilterFormPropsType) => {
  const { form, formValuesIsInitial } = useFilterForm(searchParams);

  return (
    <form action={filterDataAction.bind(null, route)} className={classes.form}>
      <SearchField label="name" form={form} />
      {route !== "episode" && <SearchField label="type" form={form} />}
      {route === "episode" && <SearchField label="episode" form={form} />}
      {route === "location" && <SearchField label="dimension" form={form} />}
      {route === "character" && (
        <>
          <SearchField label="species" form={form} />
          <SelectField
            label="status"
            form={form}
            options={["alive", "dead", "unknown"]}
          />
          <SelectField
            label="gender"
            form={form}
            options={["female", "male", "genderless", "unknown"]}
          />
        </>
      )}

      <ActionIcon.Group orientation="vertical">
        <BtnFilter disabled={formValuesIsInitial} />
        <BtnReset disabled={formValuesIsInitial} onReset={form.reset} />
      </ActionIcon.Group>
    </form>
  );
});

export default FilterForm;
