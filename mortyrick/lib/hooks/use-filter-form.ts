import { useForm } from "@mantine/form";
import type { PageSearchParamsType } from "@/types/url-params";
import type { FilterFormValues } from "@/types/filter-form.";

const initialValues: FilterFormValues = {
  name: "",
  type: "",
  species: "",
  episode: "",
  dimension: "",
  status: null,
  gender: null,
};

const useFilterForm = (searchParams: PageSearchParamsType) => {
  const form = useForm<FilterFormValues>({
    name: "filter-form",
    initialValues: {
      ...initialValues,
      ...searchParams,
    },
  });

  const formValuesIsInitial = Object.values(form.values).every(
    (value) => !value
  );

  return { form, formValuesIsInitial };
};

export default useFilterForm;
