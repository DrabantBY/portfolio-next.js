import { useEffect, useRef, useCallback } from "react";
import { useFormStatus } from "react-dom";
import type { FocusEventHandler, MouseEventHandler } from "react";
import type {
  FilterFormSelectFieldLabelType,
  FilterFormType,
} from "@/types/filter-form.";

const useSelectField = (
  label: FilterFormSelectFieldLabelType,
  form: FilterFormType
) => {
  const { pending } = useFormStatus();
  const refSelect = useRef<HTMLInputElement | null>(null);
  const value = form.values[label];
  const isEmpty = Boolean(value);
  const isFloat = isEmpty || undefined;

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    form.resetTouched();
  }, []);

  const handleOnFocus: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    form.setTouched({ [label]: true });
  }, [label]);

  const handleOnReset: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      form.setFieldValue(label, null);
      form.resetTouched();
    }, [label]);

  const handleOnChange = useCallback(
    (value: string | null) => {
      form.setFieldValue(label, value);
    },
    [label]
  );

  useEffect(() => {
    if (refSelect.current) {
      refSelect.current.blur();
    }
  }, [value]);

  return {
    refSelect,
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

export default useSelectField;
