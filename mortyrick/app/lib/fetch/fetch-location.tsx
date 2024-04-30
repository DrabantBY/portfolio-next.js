import handleSearchParams from '../utils/handle-search-params';
import type { PageLocationSearchParamsType } from '@/app/types/page';
import type { LocationFetchDataType } from '@/app/types/data';

const emptyLocationData: LocationFetchDataType = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

const fetchLocation = async (
  searchParams: PageLocationSearchParamsType
): Promise<LocationFetchDataType> => {
  const urlSearchParams = handleSearchParams(searchParams);
  const url = `${process.env.baseUrl}/location?${urlSearchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    return emptyLocationData;
  }

  const data: LocationFetchDataType = await response.json();

  return data;
};

export default fetchLocation;
