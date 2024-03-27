"use server";

import { redirect } from "next/navigation";

import handleFormData from "../utils/handle-form-data";
import { revalidatePath } from "next/cache";

export default async function filterDataAction(
  pathname: string,
  formData: FormData
) {
  const urlSearchParams = handleFormData(formData);

  const route = `${pathname}?${urlSearchParams}`;
  revalidatePath(route);
  redirect(route);
}
