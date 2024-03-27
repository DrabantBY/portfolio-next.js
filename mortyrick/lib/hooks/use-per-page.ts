import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function usePerPage() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const page = Number(searchParams.get("page"));
  const setPage = (value: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", `${value}`);
    const route = `${pathName}?${newSearchParams.toString()}`;
    replace(route);
  };

  return { page, setPage };
}
