import { useState, useCallback } from "react";
import { useFormStatus } from "react-dom";

const useSelectField = (defaultValue: string | null) => {
  const { pending } = useFormStatus();
  const [value, setValue] = useState(defaultValue);

  const isEmpty = Boolean(value);
  const isFloat = isEmpty || undefined;

  const onChange = useCallback((value: string | null) => {
    setValue(value);
  }, []);

  const onReset = useCallback(() => {
    setValue(null);
  }, []);

  return {
    pending,
    value,
    isEmpty,
    isFloat,
    onChange,
    onReset,
  };
};

export default useSelectField;
