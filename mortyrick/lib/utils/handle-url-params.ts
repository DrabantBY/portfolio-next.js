import type { UrlParamsType } from "@/types/url-params";
import checkRouteParams from "./check-route-params";

export function handleUrlParams({
  params,
  searchParams,
}: UrlParamsType): string {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!checkRouteParams(params.route)) {
    throw new Error("invalid route params");
  }

  if (!urlSearchParams.has("page")) {
    urlSearchParams.append("page", "1");
  }

  const baseUrl = process.env.baseUrl;

  return `${baseUrl}${params.route}?${urlSearchParams.toString()}`;
}
