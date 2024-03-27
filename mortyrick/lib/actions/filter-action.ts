"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import handleFormData from "../utils/handle-form-data";
import type { RouteParamsType } from "@/types/url-params";

export default async function filterDataAction(
  pathname: RouteParamsType,
  formData: FormData
) {
  const urlSearchParams = handleFormData(formData);

  const route = `/${pathname}?${urlSearchParams}`;
  revalidatePath(route);
  redirect(route);
}
