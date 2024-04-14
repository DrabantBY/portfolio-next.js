"use client";

import { useCallback } from "react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { Card, Image, Badge, Button } from "@mantine/core";
import { IconError404, IconArrowBigLeftLine } from "@tabler/icons-react";
import imgDefaultError from "@/public/default-error.jpg";

const EmptyPage = () => {
  const { back } = useRouter();

  const goBack = useCallback(() => {
    back();
  }, []);

  return (
    <Card shadow="md" padding={0} maw={800}>
      <Image
        component={NextImage}
        src={imgDefaultError}
        alt="not found page"
        priority
      />

      <Badge
        h="fit-content"
        w="100%"
        fz="xl"
        mx="auto"
        variant="light"
        color="yellow.7"
        radius={0}
        leftSection={<IconError404 size={48} />}
      >
        : page not found
      </Badge>

      <Button
        variant="light"
        fz="lg"
        tt="uppercase"
        radius={0}
        onClick={goBack}
        leftSection={<IconArrowBigLeftLine />}
      >
        go back
      </Button>
    </Card>
  );
};

export default EmptyPage;
