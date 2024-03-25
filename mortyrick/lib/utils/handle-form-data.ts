import type { PageSearchParamsType } from "@/types/urlParams";

export default function handleFormData(formData: FormData) {
  const formDataIterator = formData.entries();

  const searchParams: PageSearchParamsType = { page: "1" };

  for (const [key, value] of formDataIterator) {
    if (!key.startsWith("$ACTION_") && value && !(value instanceof File)) {
      searchParams[key as keyof PageSearchParamsType] = value;
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams);

  return urlSearchParams.toString();
}
