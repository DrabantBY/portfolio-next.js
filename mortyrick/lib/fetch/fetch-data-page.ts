import { handleUrlParams } from "@/lib/utils/handle-url-params";
import type { UrlParamsType } from "@/types/url-params";
import type { DataPageType } from "@/types/data";

export default async function fetchDataPage(
  routeParams: UrlParamsType
): Promise<DataPageType> {
  const url = handleUrlParams(routeParams);
  const response = await fetch(url);
  const data = (await response.json()) as Promise<DataPageType>;
  return data;
}
