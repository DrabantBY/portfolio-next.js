import type { PageSearchParamsType } from "@/types/url-params";

const handleFormData = (formData: FormData): string => {
  const formDataIterator = formData.entries();

  const searchParams: PageSearchParamsType = { page: "1" };

  for (const [key, value] of formDataIterator) {
    if (!key.startsWith("$ACTION_") && value && !(value instanceof File)) {
      searchParams[key as keyof PageSearchParamsType] = value;
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams);

  return urlSearchParams.toString();
};

export default handleFormData;
