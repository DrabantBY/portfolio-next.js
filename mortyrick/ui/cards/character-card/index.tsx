"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Badge, Card, Image } from "@mantine/core";
import { LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import placeholderIcon from "@/public/placeholder.png";
import { RouteParamsType } from "@/types/url-params";
import type { CharacterType } from "@/types/character";

type CharacterCardPropsType = {
  route: RouteParamsType;
  result: CharacterType;
};

export default function CharacterCard({
  route,
  result,
}: CharacterCardPropsType) {
  const [visible, { toggle }] = useDisclosure(true);

  return (
    <Card pos="relative" shadow="lg" padding="xs">
      <LoadingOverlay
        visible={visible}
        overlayProps={{ backgroundOpacity: 1 }}
      />
      <Badge
        variant="dot"
        radius="sm"
        size="xs"
        pos="absolute"
        top={15}
        right={15}
      >
        {result.species}
      </Badge>
      <Link href={`${route}/${result.id}`}>
        <Image
          component={NextImage}
          src={result.image}
          alt="Character image"
          height={300}
          width={300}
          onLoad={toggle}
          style={{ maxWidth: "100%", height: "auto" }}
          fallbackSrc={placeholderIcon.src}
        />
      </Link>
    </Card>
  );
}
