"use client";

import { usePathname } from "next/navigation";

import SearchField from "../search-field";

import classes from "./styles.module.css";

export default function FilterForm() {
  const pathname = usePathname();
  return (
    <form className={classes.form}>
      <SearchField query="name" />
      {pathname !== "/episode" && <SearchField query="type" />}
      {pathname === "/character" && <SearchField query="species" />}
      {pathname === "/episode" && <SearchField query="episode" />}
      {pathname === "/location" && <SearchField query="dimension" />}
    </form>
  );
}
