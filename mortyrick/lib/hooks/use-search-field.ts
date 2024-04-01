import { useState, useCallback, ChangeEventHandler } from "react";
import { useFormStatus } from "react-dom";

const useSearchField = (defaultValue: string) => {
  const { pending } = useFormStatus();
  const [value, setValue] = useState(defaultValue);
  const [focus, setFocus] = useState(false);
  const isEmpty = Boolean(value);
  const isFloat = isEmpty || focus || undefined;

  const onFocus = useCallback(() => {
    if (!isEmpty) {
      setFocus(true);
    }
  }, [isEmpty]);

  const onBlur = useCallback(() => {
    if (!isEmpty) {
      setFocus(false);
    }
  }, [isEmpty]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    []
  );

  const onReset = useCallback(() => {
    setValue("");
    setFocus(false);
  }, []);

  return {
    pending,
    value,
    isEmpty,
    isFloat,
    onFocus,
    onBlur,
    onChange,
    onReset,
  };
};

export default useSearchField;
