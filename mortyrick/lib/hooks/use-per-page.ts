import { usePathname, useSearchParams } from "next/navigation";

export default function usePerPage() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  const setHref = (value: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", `${value}`);
    const href = `${pathName}?${newSearchParams.toString()}`;
    return href;
  };

  return { currentPage, setHref };
}
