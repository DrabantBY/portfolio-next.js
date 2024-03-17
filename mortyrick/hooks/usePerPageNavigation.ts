import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function usePerPageNavigation() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page"));

  const navigatePerPage = (value: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", `${value}`);
    const route = `${pathName}?${newSearchParams.toString()}`;
    router.push(route);
  };

  return { page, navigatePerPage };
}
