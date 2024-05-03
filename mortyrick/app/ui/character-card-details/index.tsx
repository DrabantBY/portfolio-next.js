import { memo } from 'react';
import { Box, Paper, SimpleGrid } from '@mantine/core';
import CharacterCardImage from '../character-card-image';
import CharacterCardNotification from '../character-card-notification';
import CharacterCardEpisodes from '../character-card-episodes';
import type { CharacterDataType, CharacterEpisodeListType } from '@/app/types/data';

type CharacterCardDetailsPropsType = {
  data: CharacterDataType;
  episodes: CharacterEpisodeListType;
};

const CharacterCardDetails = memo(({ data, episodes }: CharacterCardDetailsPropsType) => {
  return (
    <Paper shadow="xl" p="xl">
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <CharacterCardNotification
          name={data.name}
          species={data.species}
          gender={data.gender}
          status={data.status}
          type={data.type}
          origin={data.origin}
          location={data.location}
        />
        <Box>
          <CharacterCardImage src={data.image} />
          <CharacterCardEpisodes episodes={episodes} />
        </Box>
      </SimpleGrid>
    </Paper>
  );
});

export default CharacterCardDetails;
