import { Loader } from "@mantine/core";
import classes from "./styles.module.css";

const Spinner = () => {
  return (
    <Loader
      className={classes.position}
      size="xl"
      pos="absolute"
      top="50%"
      left="50%"
    />
  );
};

export default Spinner;
