import handleSearchParams from '../utils/handle-search-params';
import type { PageLocationSearchParamsType } from '@/app/types/page';
import type { LocationFetchDataType } from '@/app/types/data';

const fetchLocation = async (
  searchParams: PageLocationSearchParamsType
): Promise<LocationFetchDataType | null> => {
  const urlSearchParams = handleSearchParams(searchParams);
  const url = `${process.env.baseUrl}/location?${urlSearchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data: LocationFetchDataType = await response.json();

  return data;
};

export default fetchLocation;
