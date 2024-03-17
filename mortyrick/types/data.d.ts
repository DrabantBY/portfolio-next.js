import type { CharacterDataType } from "./character";
import type { EpisodeDataType } from "./episode";
import type { LocationDataType } from "./location";
import type { InfoType } from "./info";

export type DataPageType = {
  info: InfoType;
  results: CharacterDataType[] | EpisodeDataType[] | LocationDataType[];
};
