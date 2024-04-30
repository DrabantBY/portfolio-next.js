import handleSearchParams from '../utils/handle-search-params';
import type { PageCharacterSearchParamsType } from '@/app/types/page';
import type { CharacterFetchDataType } from '@/app/types/data';

const emptyCharacterData: CharacterFetchDataType = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

const fetchCharacter = async (
  searchParams: PageCharacterSearchParamsType
): Promise<CharacterFetchDataType> => {
  const urlSearchParams = handleSearchParams(searchParams);
  const url = `${process.env.baseUrl}/character?${urlSearchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    return emptyCharacterData;
  }

  const data: CharacterFetchDataType = await response.json();

  return data;
};

export default fetchCharacter;
