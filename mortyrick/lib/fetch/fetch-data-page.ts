import handleUrlParams from "@/lib/utils/handle-url-params";
import type { UrlParamsType } from "@/types/url-params";
import type { DataPageType } from "@/types/data";

const emptyData: DataPageType = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

const fetchDataPage = async (
  routeParams: UrlParamsType
): Promise<DataPageType> => {
  const url = handleUrlParams(routeParams);
  const response = await fetch(url);

  if (!response.ok) {
    return emptyData;
  }

  const data: DataPageType = await response.json();
  return data;
};

export default fetchDataPage;
