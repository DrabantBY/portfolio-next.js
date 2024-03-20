"use client";

import { usePathname } from "next/navigation";
import SearchField from "../ui/search-field";

export default function FilterForm() {
  const pathname = usePathname();
  return (
    <form action="">
      <SearchField query="name" />
      {pathname !== "/episode" && <SearchField query="type" />}
      {pathname === "/character" && <SearchField query="species" />}
      {pathname === "/episode" && <SearchField query="episode" />}
      {pathname === "/location" && <SearchField query="dimension" />}
    </form>
  );
}
