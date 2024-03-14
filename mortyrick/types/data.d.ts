import type { InfoType } from "./info";

export type DataType<T> = {
  info: InfoType;
  results: T[];
};
