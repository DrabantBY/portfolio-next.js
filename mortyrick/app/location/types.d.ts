import type { DataType } from "@/types/data";

type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type LocationDataType = DataType<LocationType>;

export type LocationSearchParamsType = {
  page?: string;
  name?: string;
  type?: string;
  dimension?: string;
};
