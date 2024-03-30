import { useCallback } from "react";
import { useFormStatus } from "react-dom";
import type {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import type {
  FilterFormType,
  FilterFormSearchFieldLabelType,
} from "@/types/filter-form.";

const useSearchField = (
  label: FilterFormSearchFieldLabelType,
  form: FilterFormType
) => {
  const { pending } = useFormStatus();
  const value = form.values[label];
  const isEmpty = Boolean(value);
  const isFloat = isEmpty || form.isTouched(label) || undefined;

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    form.resetTouched();
  }, []);

  const handleOnFocus: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    form.setTouched({ [label]: true });
  }, [label]);

  const handleOnReset: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      form.setFieldValue(label, "");
      form.resetTouched();
    }, [label]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      form.setFieldValue(label, event.target.value);
    },
    [label]
  );

  return {
    pending,
    value,
    isEmpty,
    isFloat,
    handleOnFocus,
    handleOnBlur,
    handleOnReset,
    handleOnChange,
  };
};

export default useSearchField;
