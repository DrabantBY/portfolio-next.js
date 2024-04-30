import { memo } from 'react';
import { Box, Center, Container, Paper, SimpleGrid, Stack } from '@mantine/core';
import CharacterCardImage from '../character-card-image';
import CharacterCardNotification from '../character-card-notification';
import CharacterCardEpisodes from '../character-card-episodes';
import fetchCharacterEpisodes from '@/app/lib/fetch/fetch-character-episodes';
import type { CharacterDataType } from '@/app/types/data';

const CharacterCardDetails = memo(async ({ data }: { data: CharacterDataType }) => {
  const episodes = await fetchCharacterEpisodes(data.episode);

  return (
    <Container size="xl">
      <Center>
        <Paper shadow="xl" p="xl">
          <SimpleGrid cols={2}>
            <CharacterCardNotification
              name={data.name}
              species={data.species}
              gender={data.gender}
              status={data.status}
              type={data.type}
              origin={data.origin.name}
              location={data.location.name}
            />
            <Stack gap="xs" justify="space-between">
              <CharacterCardImage src={data.image} />
              <CharacterCardEpisodes episodes={episodes} />
            </Stack>
          </SimpleGrid>
        </Paper>
      </Center>
    </Container>
  );
});

export default CharacterCardDetails;
