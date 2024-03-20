"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Paper, Badge, BackgroundImage } from "@mantine/core";

import type { CharacterType } from "@/types/character";

export default function CharacterCard({ id, image, species }: CharacterType) {
  const route = usePathname();
  return (
    <Paper
      shadow="md"
      p="xs"
      component={Link}
      href={`${route}/${id}`}
      className="background-theme"
    >
      <BackgroundImage src={image} h={150} pl={5}>
        <Badge variant="dot" radius="sm" size="sm">
          {species}
        </Badge>
      </BackgroundImage>
    </Paper>
  );
}
