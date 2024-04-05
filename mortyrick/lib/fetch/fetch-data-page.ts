import { handleUrlParams } from "@/lib/utils/handle-url-params";
import type { UrlParamsType } from "@/types/url-params";
import type { DataPageType } from "@/types/data";

const fetchDataPage = async (
  routeParams: UrlParamsType
): Promise<DataPageType> => {
  const url = handleUrlParams(routeParams);
  const response = await fetch(url);
  if (!response.ok && response.status === 404) {
    const { error } = await response.json();
    throw new Error(error);
  }
  if (!response.ok && response.status !== 404) {
    const message = `${response.status}: ${response.statusText}`;
    throw new Error(message);
  }
  const data: Promise<DataPageType> = await response.json();
  return data;
};

export default fetchDataPage;
