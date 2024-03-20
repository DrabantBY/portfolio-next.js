import type { UrlParamsType } from "@/types/urlParams";

export function handleUrlParams({
  params,
  searchParams,
}: UrlParamsType): string {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!urlSearchParams.has("page")) {
    urlSearchParams.append("page", "1");
  }

  const baseUrl = process.env.baseUrl;

  return `${baseUrl}${params.route}?${urlSearchParams.toString()}`;
}
