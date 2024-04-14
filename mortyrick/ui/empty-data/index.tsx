import NextImage from "next/image";
import { Card, Center, Image, Title } from "@mantine/core";
import imgNotFound from "@/public/not-found.png";

const EmptyData = () => (
  <Center my={50}>
    <Card shadow="md" padding={0}>
      <Image
        component={NextImage}
        src={imgNotFound}
        alt="not found data"
        priority
      />

      <Title my="md" order={3} ta="center" tt="uppercase">
        there is nothing here
      </Title>
    </Card>
  </Center>
);

export default EmptyData;
