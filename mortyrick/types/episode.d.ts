import type { DataType } from "@/types/data";

export type EpisodeSearchParamsType = {
  page?: string;
  name?: string;
  episode?: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
