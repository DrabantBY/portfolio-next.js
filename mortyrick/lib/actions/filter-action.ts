"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import handleFormData from "../utils/handle-form-data";
import type { RouteParamsType } from "@/types/url-params";

const filterDataAction = async (
  pathname: RouteParamsType,
  formData: FormData
) => {
  const urlSearchParams = handleFormData(formData);
  const route = `/${pathname}?${urlSearchParams}`;
  revalidatePath(route);
  redirect(route);
};

export default filterDataAction;
