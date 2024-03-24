import { useState, useCallback, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function useSearch(
  label: "name" | "type" | "species" | "episode" | "dimension"
) {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(label) ?? "";
  const [value, setValue] = useState<string>(initialValue);
  const [focus, setFocus] = useState<boolean>(false);
  const float = Boolean(value.trim()) || focus || undefined;

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  }, []);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const resetValue = useCallback(() => {
    setValue("");
  }, []);

  return { value, float, handleChange, handleFocus, handleBlur, resetValue };
}
