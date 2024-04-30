import handleSearchParams from '../utils/handle-search-params';
import type { PageEpisodeSearchParamsType } from '@/app/types/page';
import type { EpisodeFetchDataType } from '@/app/types/data';

const emptyEpisodeData: EpisodeFetchDataType = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

const fetchEpisode = async (
  searchParams: PageEpisodeSearchParamsType
): Promise<EpisodeFetchDataType> => {
  const urlSearchParams = handleSearchParams(searchParams);
  const url = `${process.env.baseUrl}/episode?${urlSearchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    return emptyEpisodeData;
  }

  const data: EpisodeFetchDataType = await response.json();

  return data;
};

export default fetchEpisode;
