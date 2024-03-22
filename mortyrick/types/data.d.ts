import type { CharacterDataType } from "./character";
import type { EpisodeDataType } from "./episode";
import type { LocationDataType } from "./location";
import type { InfoType } from "./info";

export type ResultsDataType =
  | CharacterDataType[]
  | EpisodeDataType[]
  | LocationDataType[];

export type DataPageType = {
  info: InfoType;
  results: ResultsDataType;
};
