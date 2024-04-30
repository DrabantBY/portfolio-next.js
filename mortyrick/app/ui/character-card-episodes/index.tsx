import { memo } from 'react';
import Link from 'next/link';
import { NavLink, ScrollArea, SimpleGrid } from '@mantine/core';
import { IconChevronRight, IconMovie } from '@tabler/icons-react';
import type { CharacterEpisodeListType } from '@/app/types/data';

const CharacterCardEpisodes = memo(
  ({ episodes }: { episodes: CharacterEpisodeListType }) => {
    return (
      <ScrollArea h={200} offsetScrollbars scrollbarSize={2} scrollHideDelay={0}>
        <SimpleGrid cols={2} verticalSpacing="xs" spacing="xs">
          {episodes.map((episode) => (
            <NavLink
              key={episode.id}
              component={Link}
              href={`/episode/${episode.id}`}
              label={episode.episode}
              leftSection={<IconMovie />}
              rightSection={<IconChevronRight />}
              active
            />
          ))}
        </SimpleGrid>
      </ScrollArea>
    );
  }
);

export default CharacterCardEpisodes;
