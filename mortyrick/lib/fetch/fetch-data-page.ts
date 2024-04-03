import { handleUrlParams } from "@/lib/utils/handle-url-params";
import type { UrlParamsType } from "@/types/url-params";
import type { DataPageType, DataErrorType } from "@/types/data";

const fetchDataPage = async (
  routeParams: UrlParamsType
): Promise<DataPageType | DataErrorType> => {
  const url = handleUrlParams(routeParams);
  const response = await fetch(url);
  const data = (await response.json()) as Promise<DataPageType | DataErrorType>;
  return data;
};

export default fetchDataPage;
