"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Paper, Badge, BackgroundImage, Grid } from "@mantine/core";
import type { CharacterType } from "@/types/character";

export default function CharacterCard({
  results,
}: {
  results: CharacterType[];
}) {
  const route = usePathname();
  return (
    <Grid>
      {results.map(({ id, species, image }) => (
        <Grid.Col span={2} key={id}>
          <Paper shadow="md" p="xs" component={Link} href={`${route}/${id}`}>
            <BackgroundImage src={image} h={150} pl={5}>
              <Badge variant="dot" radius="sm" size="sm">
                {species}
              </Badge>
            </BackgroundImage>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
