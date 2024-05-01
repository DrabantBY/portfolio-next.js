import type { CharacterDataType } from '@/app/types/data';

const fetchCharacterDetails = async (id: number): Promise<CharacterDataType | null> => {
  const url = `${process.env.baseUrl}/character/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data: CharacterDataType = await response.json();

  data.origin.url = data.origin.url.replace(`${process.env.baseUrl}`, '');
  data.location.url = data.location.url.replace(`${process.env.baseUrl}`, '');
  data.episode = data.episode.map((url) =>
    url.replace(`${process.env.baseUrl}/episode/`, '')
  );

  return data;
};

export default fetchCharacterDetails;
