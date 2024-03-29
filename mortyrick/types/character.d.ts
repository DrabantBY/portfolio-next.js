import type { DataType } from "@/types/data";

export type CharacterSearchParamsType = {
  page?: string;
  name?: string;
  type?: string;
  status?: string;
  species?: string;
  gender?: string;
};

export type CharacterType = {
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
