import NextImage from 'next/image';
import { Container, Card, Image, Badge, Button, Center } from '@mantine/core';
import { IconError404 } from '@tabler/icons-react';
import imgNotFound from '@/public/not-found.png';

export default function NotFound() {
  return (
    <Container className="center" size="xl" pos="absolute" top="50%" left="50%">
      <Center>
        <Card shadow="md" padding={0}>
          <Image component={NextImage} src={imgNotFound} alt="not found page" priority />
          <Badge
            h="fit-content"
            w="100%"
            fz="xl"
            mx="auto"
            variant="light"
            color="yellow.7"
            radius={0}
            leftSection={<IconError404 size={48} />}>
            : page not found
          </Badge>
        </Card>
      </Center>
    </Container>
  );
}
