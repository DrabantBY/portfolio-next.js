import type { CharacterEpisodeListType, EpisodeDataType } from '@/app/types/data';

const fetchCharacterEpisodes = async (
  linkArr: string[]
): Promise<CharacterEpisodeListType> => {
  if (linkArr.length === 0) {
    return [];
  }

  const idArr = linkArr.map((link) =>
    link.replaceAll(`${process.env.baseUrl}episode/`, '')
  );

  const url = `${process.env.baseUrl}/episode/${idArr}`;

  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }

  const data: EpisodeDataType[] = await response.json();

  const episodes = data.map(({ id, episode }) => ({ id, episode }));

  return episodes;
};

export default fetchCharacterEpisodes;
