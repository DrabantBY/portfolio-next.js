import NextImage from "next/image";
import { Card, Image, Title } from "@mantine/core";
import srcImage from "@/public/empty.png";
import classes from "./styles.module.css";

const ErrorNotFound = ({ message }: { message: string }) => {
  return (
    <Card
      className={classes.position}
      maw={400}
      pos="absolute"
      top="50%"
      left="50%"
    >
      <Card.Section>
        <Image
          component={NextImage}
          src={srcImage}
          alt="not found data"
          h={200}
        ></Image>
      </Card.Section>
      <Title mt="md" order={3} ta="center" tt="uppercase">
        {message}
      </Title>
    </Card>
  );
};

export default ErrorNotFound;
