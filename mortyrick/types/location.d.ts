import type { DataType } from "@/types/data";

export type LocationSearchParamsType = {
  page?: string;
  name?: string;
  type?: string;
  dimension?: string;
};

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
