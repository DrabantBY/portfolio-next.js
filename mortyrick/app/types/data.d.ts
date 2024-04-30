export type InfoDataType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharacterDataType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type EpisodeDataType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type LocationDataType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type CharacterFetchDataType = {
  info: InfoDataType;
  results: CharacterDataType[];
};

export type EpisodeFetchDataType = {
  info: InfoDataType;
  results: EpisodeDataType[];
};

export type LocationFetchDataType = {
  info: InfoDataType;
  results: LocationDataType[];
};
