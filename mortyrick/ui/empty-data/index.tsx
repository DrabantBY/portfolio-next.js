"use client";

import NextImage from "next/image";
import { Card, Center, Image, Title } from "@mantine/core";
import imgNotFound from "@/public/not-found.png";

const EmptyData = () => (
  <Center>
    <Card maw={400} shadow="md">
      <Card.Section>
        <Image
          component={NextImage}
          src={imgNotFound}
          alt="not found data"
          h={200}
          priority
        />
      </Card.Section>
      <Title mt="md" order={3} ta="center" tt="uppercase">
        there is nothing here
      </Title>
    </Card>
  </Center>
);

export default EmptyData;
