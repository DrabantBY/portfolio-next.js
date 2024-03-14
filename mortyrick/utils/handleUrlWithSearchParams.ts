import { CharacterPageSearchParamsType } from "@/app/character/page";

export function getUrlWithSearchParams(
  route: string,
  searchParams: CharacterPageSearchParamsType
): string {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!urlSearchParams.has("page")) {
    urlSearchParams.append("page", "1");
  }

  const baseUrl = process.env.BASE_URL;

  const url = `${baseUrl}${route}?${urlSearchParams.toString()}`;

  return url;
}
