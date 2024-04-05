import { RouteParamsType } from "@/types/url-params";

const checkRouteParams = (route: string): route is RouteParamsType => {
  return ["character", "episode", "location"].includes(route);
};

export default checkRouteParams;
