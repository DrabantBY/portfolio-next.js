import type { PageSearchParamsType } from "@/types/urlParams";

const SEARCH_PARAMS = [
  "name",
  "type",
  "status",
  "species",
  "gender",
  "episode",
  "dimension",
];

export default function handleFormData(formData: FormData) {
  const searchParams: PageSearchParamsType = { page: "1" };

  for (const param of SEARCH_PARAMS) {
    const formDataValue = formData.get(param) as string | null;
    if (formDataValue) {
      searchParams[param as keyof PageSearchParamsType] = formDataValue;
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams);

  return urlSearchParams.toString();
}
