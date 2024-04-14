import Link from "next/link";
import NextImage from "next/image";
import { Badge, Card, Image } from "@mantine/core";
import type { CharacterType } from "@/types/character";
import { RouteParamsType } from "@/types/url-params";

type CharacterCardPropsType = {
  route: RouteParamsType;
  result: CharacterType;
};

export default function CharacterCard({
  route,
  result,
}: CharacterCardPropsType) {
  return (
    <Card
      shadow="lg"
      padding={0}
      withBorder
      component={Link}
      href={`${route}/${result.id}`}
    >
      <Badge variant="dot" radius="sm" size="sm" my="xs" ml="auto" mr="xs">
        {result.status} {result.species}
      </Badge>

      <Image
        component={NextImage}
        src={result.image}
        alt="Character image"
        height={300}
        width={300}
        loading="lazy"
        style={{ width: "100%", height: "auto" }}
      />
    </Card>
  );
}
