import useSelectField from "@/lib/hooks/use-select-field";
import { ComboboxItem, Select } from "@mantine/core";
import BtnInput from "../btn-input";
import type {
  FilterFormType,
  FilterFormSelectFieldLabelType,
} from "@/types/filter-form.";
import classes from "./styles.module.css";

type SelectFieldPropsType = {
  label: FilterFormSelectFieldLabelType;
  form: FilterFormType;
  options: string[];
};

export default function SelectField({
  label,
  form,
  options,
}: SelectFieldPropsType) {
  const {
    refSelect,
    pending,
    value,
    isFloat,
    isEmpty,
    handleOnFocus,
    handleOnBlur,
    handleOnReset,
    handleOnChange,
  } = useSelectField(label, form);

  return (
    <Select
      ref={refSelect}
      classNames={classes}
      name={label}
      label={label}
      data={[{ group: "select", items: options }]}
      disabled={pending}
      value={value}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      data-float={isFloat}
      labelProps={{ "data-float": isFloat }}
      w={130}
      variant="unstyled"
      rightSectionPointerEvents={isEmpty ? "auto" : "none"}
      rightSection={
        <BtnInput
          type="select"
          isEmpty={isEmpty}
          disabled={pending}
          onReset={handleOnReset}
        />
      }
      comboboxProps={{
        shadow: "md",
        size: "sm",
        offset: 0,
        dropdownPadding: 0,
      }}
    />
  );
}
