import handleSearchParams from '../utils/handle-search-params';
import type { PageCharacterSearchParamsType } from '@/app/types/page';
import type { CharacterFetchDataType } from '@/app/types/data';

const fetchCharacter = async (
  searchParams: PageCharacterSearchParamsType
): Promise<CharacterFetchDataType | null> => {
  const urlSearchParams = handleSearchParams(searchParams);
  const url = `${process.env.baseUrl}/character?${urlSearchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data: CharacterFetchDataType = await response.json();

  return data;
};

export default fetchCharacter;
