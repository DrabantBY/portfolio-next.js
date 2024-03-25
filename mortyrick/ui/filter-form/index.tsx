"use client";

import { usePathname } from "next/navigation";

import SearchField from "./search-field";
import SelectField from "./select-field";
import BtnSearch from "./btn-search";

import filterDataAction from "@/lib/actions/filter-action";

import classes from "./styles.module.css";

export default function FilterForm() {
  const pathname = usePathname();

  return (
    <form
      action={filterDataAction.bind(null, pathname)}
      className={classes.form}
    >
      <SearchField label="name" />
      {pathname !== "/episode" && <SearchField label="type" />}
      {pathname === "/character" && (
        <>
          <SearchField label="species" />
          <SelectField label="status" options={["alive", "dead", "unknown"]} />
          <SelectField
            label="gender"
            options={["female", "male", "genderless", "unknown"]}
          />
        </>
      )}
      {pathname === "/episode" && <SearchField label="episode" />}
      {pathname === "/location" && <SearchField label="dimension" />}
      <BtnSearch />
    </form>
  );
}
