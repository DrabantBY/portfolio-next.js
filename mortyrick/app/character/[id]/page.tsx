import CharacterCardDetails from '@/app/ui/character-card-details';

import fetchCharacterDetails from '@/app/lib/fetch/fetch-character-details';
import DataEmpty from '@/app/ui/data-empty';

export default async function PageCharacterDetails({
  params,
}: {
  params: { id: number };
}) {
  const data = await fetchCharacterDetails(params.id);

  if (!data) {
    return <DataEmpty />;
  }

  return <CharacterCardDetails data={data} />;
}
