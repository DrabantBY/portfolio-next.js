import type { UseFormReturnType } from "@mantine/form";

export type FilterFormValuesType = {
  name: string;
  type: string;
  species: string;
  episode: string;
  dimension: string;
  status: string | null;
  gender: string | null;
};

export type FilterFormType = UseFormReturnType<FilterFormValuesType>;

export type FilterFormSearchFieldLabelType =
  | "name"
  | "type"
  | "species"
  | "episode"
  | "dimension";

export type FilterFormSelectFieldLabelType = "status" | "gender";
