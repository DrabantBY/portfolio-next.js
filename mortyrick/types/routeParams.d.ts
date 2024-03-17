import type { EpisodeSearchParamsType } from "./episode";
import type { LocationSearchParamsType } from "./location";
import type { CharacterSearchParamsType } from "./character";

export type PageSearchParamsType =
  | CharacterSearchParamsType
  | EpisodeSearchParamsType
  | LocationSearchParamsType;

export type RouteParamsType = {
  params: {
    route: "character" | "episode" | "location";
  };

  searchParams: PageSearchParamsType;
};
