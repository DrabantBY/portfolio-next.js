import { handleRouteParams } from "@/utils/handle-route-params";
import type { RouteParamsType } from "@/types/routeParams";
import type { DataPageType } from "@/types/data";

export default async function getDataByRoute(
  routeParams: RouteParamsType
): Promise<DataPageType> {
  const url = handleRouteParams(routeParams);
  const response = await fetch(url);
  const data = (await response.json()) as Promise<DataPageType>;
  return data;
}
