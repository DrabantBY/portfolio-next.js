import { PageCharacterSearchParamsType } from '@/app/types/page';

const handleSearchParams = (searchParams: PageCharacterSearchParamsType): string => {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!urlSearchParams.has('page')) {
    urlSearchParams.append('page', '1');
  }

  return urlSearchParams.toString();
};

export default handleSearchParams;
