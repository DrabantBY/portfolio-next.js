import type { EpisodeSearchParamsType } from "./episode";
import type { LocationSearchParamsType } from "./location";
import type { CharacterSearchParamsType } from "./character";

export type PageSearchParamsType = {
  page?: string;
  name?: string;
  type?: string;
  status?: string;
  species?: string;
  gender?: string;
  episode?: string;
  dimension?: string;
};

export type RouteParamsType = "character" | "episode" | "location";

export type UrlParamsType = {
  params: { route: RouteParamsType };
  searchParams: PageSearchParamsType;
};
