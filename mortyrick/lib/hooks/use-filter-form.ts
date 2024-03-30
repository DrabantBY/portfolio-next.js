import { useForm } from "@mantine/form";
import type { PageSearchParamsType } from "@/types/url-params";
import type { FilterFormValuesType } from "@/types/filter-form.";

const initialValues: FilterFormValuesType = {
  name: "",
  type: "",
  species: "",
  episode: "",
  dimension: "",
  status: null,
  gender: null,
};

const useFilterForm = (searchParams: PageSearchParamsType) => {
  const initialSearchParams = { ...searchParams };
  if ("page" in initialSearchParams) {
    delete initialSearchParams.page;
  }

  const form = useForm<FilterFormValuesType>({
    name: "filter-form",
    initialValues: {
      ...initialValues,
      ...initialSearchParams,
    },
  });

  const formValuesIsInitial = Object.values(form.values).every(
    (value) => !value
  );

  return { form, formValuesIsInitial };
};

export default useFilterForm;
