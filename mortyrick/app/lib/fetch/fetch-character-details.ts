import type { CharacterDataType } from '@/app/types/data';

const fetchCharacterDetails = async (id: number): Promise<CharacterDataType | null> => {
  const url = `${process.env.baseUrl}/character/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data: CharacterDataType = await response.json();

  return data;
};

export default fetchCharacterDetails;
