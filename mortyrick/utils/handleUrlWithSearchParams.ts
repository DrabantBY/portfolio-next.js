import { CharacterSearchParamsType } from "@/app/character/types";
import { EpisodeSearchParamsType } from "@/app/episode/types";
import { LocationSearchParamsType } from "@/app/location/types";

type PageSearchParamsType =
  | CharacterSearchParamsType
  | EpisodeSearchParamsType
  | LocationSearchParamsType;

type RoutePageType = "character" | "episode" | "location";

export function getUrlWithSearchParams(
  route: RoutePageType,
  searchParams: PageSearchParamsType
): string {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!urlSearchParams.has("page")) {
    urlSearchParams.append("page", "1");
  }

  const baseUrl = process.env.BASE_URL;

  const url = `${baseUrl}${route}?${urlSearchParams.toString()}`;

  return url;
}
