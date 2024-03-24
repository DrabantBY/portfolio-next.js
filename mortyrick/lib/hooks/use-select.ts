import { useState, useEffect, useRef, useCallback } from "react";

import { useSearchParams } from "next/navigation";

export default function useSelect(label: "status" | "gender") {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(label);
  const [value, setValue] = useState<string | null>(initialValue);
  const ref = useRef<HTMLInputElement | null>(null);
  const float = Boolean(value) || undefined;

  useEffect(() => {
    if (ref.current) {
      ref.current.blur();
    }
  }, [value]);

  const handleChange = useCallback((option: string | null) => {
    setValue(option);
  }, []);

  const resetValue = useCallback(() => {
    setValue(null);
  }, []);

  return { value, float, ref, handleChange, resetValue };
}
