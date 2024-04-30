import type { PageCharacterSearchParamsType } from '@/app/types/page';

const handleFilterFormData = (formData: FormData): string => {
  const formDataIterator = formData.entries();

  const searchParams: PageCharacterSearchParamsType = { page: '1' };

  for (const [key, value] of formDataIterator) {
    if (!key.startsWith('$ACTION_') && value && !(value instanceof File)) {
      searchParams[key as keyof PageCharacterSearchParamsType] = value;
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams);

  return urlSearchParams.toString();
};

export default handleFilterFormData;
