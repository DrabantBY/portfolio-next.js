'use client';

import { memo } from 'react';
import NextImage from 'next/image';
import { Box, LoadingOverlay, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const CharacterCardImage = memo(({ src }: { src: string }) => {
  const [visible, { toggle }] = useDisclosure(true);

  return (
    <Box pos="relative">
      <LoadingOverlay visible={visible} overlayProps={{ backgroundOpacity: 1 }} />
      <Image
        component={NextImage}
        src={src}
        alt="Character image"
        height={300}
        width={300}
        onLoad={toggle}
        style={{ maxWidth: '100%', height: 'auto' }}
        priority
      />
    </Box>
  );
});

export default CharacterCardImage;
