import { useCallback } from "react";
import { useRouter } from "next/navigation";
import type { PageSearchParamsType, RouteParamsType } from "@/types/url-params";

const usePerPage = (
  route: RouteParamsType,
  searchParams: PageSearchParamsType
) => {
  const { replace } = useRouter();

  const page = Number(searchParams.page ?? "1");

  const setPage = useCallback(
    (value: number) => {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.set("page", `${value}`);
      const url = `/${route}?${urlSearchParams.toString()}`;
      replace(url);
    },
    [route, searchParams]
  );

  return { page, setPage };
};

export default usePerPage;
