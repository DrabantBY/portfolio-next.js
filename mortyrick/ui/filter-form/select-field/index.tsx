import { memo } from "react";
import { Box, Divider, Select } from "@mantine/core";
import BtnInput from "../btn-input";
import classes from "./styles.module.css";
import { useFormStatus } from "react-dom";
import type { FilterFormSelectFieldLabelType } from "@/types/filter-form.";

type SelectFieldPropsType = {
  label: FilterFormSelectFieldLabelType;
  options: string[];
};

const SelectField = memo(({ label, options }: SelectFieldPropsType) => {
  const { pending } = useFormStatus();
  return (
    <Box mr="xs">
      <Select
        classNames={classes}
        name={label}
        label={label}
        data={[{ group: "select", items: options }]}
        disabled={pending}
        // data-float={isFloat}
        // labelProps={{ "data-float": isFloat }}
        w={{ base: "100%", md: 130 }}
        variant="unstyled"
        // rightSectionPointerEvents={isEmpty ? "auto" : "none"}
        // rightSection={
        //   <BtnInput
        //     type="select"
        //     isEmpty={isEmpty}
        //     disabled={pending}
        //     onReset={handleOnReset}
        //   />
        // }
        comboboxProps={{
          shadow: "md",
          size: "sm",
          offset: 0,
          dropdownPadding: 0,
        }}
      />
      {/* <Divider size="sm" color={isFloat ? "indigo.4" : undefined} /> */}
    </Box>
  );
});

export default SelectField;
