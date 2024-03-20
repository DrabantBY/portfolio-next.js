import type { RouteParamsType } from "@/types/routeParams";

export function handleRouteParams({
  params,
  searchParams,
}: RouteParamsType): string {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!urlSearchParams.has("page")) {
    urlSearchParams.append("page", "1");
  }

  const baseUrl = process.env.baseUrl;

  return `${baseUrl}${params.route}?${urlSearchParams.toString()}`;
}
