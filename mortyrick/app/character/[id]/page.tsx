import { Center, Container } from '@mantine/core';
import CharacterCardDetails from '@/app/ui/character-card-details';
import DataEmpty from '@/app/ui/data-empty';
import fetchCharacterDetails from '@/app/lib/fetch/fetch-character-details';
import fetchCharacterEpisodes from '@/app/lib/fetch/fetch-character-episodes';

export default async function PageCharacterDetails({
  params,
}: {
  params: { id: number };
}) {
  const data = await fetchCharacterDetails(params.id);

  if (!data) {
    return <DataEmpty />;
  }

  const episodes = await fetchCharacterEpisodes(data.episode);
  return (
    <Container size="xl">
      <Center>
        <CharacterCardDetails data={data} episodes={episodes} />
      </Center>
    </Container>
  );
}
