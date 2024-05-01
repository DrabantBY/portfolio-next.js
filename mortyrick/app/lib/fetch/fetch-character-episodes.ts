import type { CharacterEpisodeListType, EpisodeDataType } from '@/app/types/data';

const fetchCharacterEpisodes = async (
  linkArr: string[]
): Promise<CharacterEpisodeListType> => {
  if (linkArr.length === 0) {
    return [];
  }

  const url = `${process.env.baseUrl}/episode/${linkArr}`;

  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }

  const data: EpisodeDataType[] | EpisodeDataType = await response.json();

  if (!Array.isArray(data)) {
    const { id, episode } = data;
    return [{ id, episode }];
  }

  return data.map(({ id, episode }) => ({ id, episode }));
};

export default fetchCharacterEpisodes;
