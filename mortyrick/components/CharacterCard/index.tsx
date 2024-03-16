"use client";

import { Paper, Badge, BackgroundImage, Grid } from "@mantine/core";
import { CharacterType } from "@/types/character";

export default function CharacterCard({
  created,
  image,
  species,
}: CharacterType) {
  const data = new Date(created);
  return (
    <Grid.Col span={2}>
      <Paper shadow="md" p="xs">
        <BackgroundImage src={image} h={150} pl={5}>
          <Badge variant="dot" radius="sm" size="sm">
            {species}
          </Badge>
        </BackgroundImage>
      </Paper>
    </Grid.Col>
  );
}
