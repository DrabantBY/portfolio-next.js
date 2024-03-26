"use client";

import { usePathname } from "next/navigation";

import { ActionIcon } from "@mantine/core";
import { useForm } from "@mantine/form";

import SearchField from "./search-field";
import SelectField from "./select-field";
import BtnFilter from "./btn-filter";
import BtnReset from "./btn-reset";

import filterDataAction from "@/lib/actions/filter-action";

import classes from "./styles.module.css";

export type FormValues = {
  name: string;
  type: string;
  species: string;
  episode: string;
  dimension: string;
  status: string | null;
  gender: string | null;
};

export default function FilterForm() {
  const path = usePathname();

  const form = useForm<FormValues>({
    name: "filter-form",
    initialValues: {
      name: "",
      type: "",
      species: "",
      episode: "",
      dimension: "",
      status: null,
      gender: null,
    },
  });

  const btnDisabled = Object.values(form.values).every((value) => !value);

  return (
    <form
      onSubmit={() => console.log(form.values)}
      action={filterDataAction.bind(null, path)}
      className={classes.form}
    >
      <SearchField label="name" form={form} />
      {path !== "/episode" && <SearchField label="type" form={form} />}
      {path === "/episode" && <SearchField label="episode" form={form} />}
      {path === "/location" && <SearchField label="dimension" form={form} />}
      {path === "/character" && (
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
        <BtnFilter disabled={btnDisabled} />
        <BtnReset disabled={btnDisabled} resetForm={form.reset} />
      </ActionIcon.Group>
    </form>
  );
}
