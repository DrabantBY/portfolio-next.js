import { memo } from 'react';
import { Center, Container, Paper, SimpleGrid } from '@mantine/core';
import CharacterCardImage from '../character-card-image';
import CharacterCardNotification from '../character-card-notification';
import type { CharacterDataType } from '@/app/types/data';

const CharacterCardDetails = memo(({ data }: { data: CharacterDataType }) => {
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
            <CharacterCardImage src={data.image} />
          </SimpleGrid>
        </Paper>
      </Center>
    </Container>
  );
});

export default CharacterCardDetails;
