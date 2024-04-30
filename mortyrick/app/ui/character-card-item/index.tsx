import { memo } from 'react';
import Link from 'next/link';
import { Paper } from '@mantine/core';
import CharacterCardImage from '../character-card-image';
import type { CharacterDataType } from '@/app/types/data';
import classes from './styles.module.css';

const CharacterCardItem = memo(({ result }: { result: CharacterDataType }) => {
  return (
    <Paper
      classNames={classes}
      pos="relative"
      shadow="md"
      p="xs"
      withBorder
      component={Link}
      href={`/character/${result.id}`}>
      <CharacterCardImage src={result.image} />
    </Paper>
  );
});

export default CharacterCardItem;
