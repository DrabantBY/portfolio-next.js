import handleSearchParams from '../utils/handle-search-params';
import type { PageEpisodeSearchParamsType } from '@/app/types/page';
import type { EpisodeFetchDataType } from '@/app/types/data';

const fetchEpisode = async (
  searchParams: PageEpisodeSearchParamsType
): Promise<EpisodeFetchDataType | null> => {
  const urlSearchParams = handleSearchParams(searchParams);
  const url = `${process.env.baseUrl}/episode?${urlSearchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data: EpisodeFetchDataType = await response.json();

  return data;
};

export default fetchEpisode;
