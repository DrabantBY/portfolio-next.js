"use server";

import { redirect } from "next/navigation";

import handleFormData from "../utils/handle-form-data";

export default async function filterDataAction(
  pathname: string,
  formData: FormData
) {
  const urlSearchParams = handleFormData(formData);

  const route = `${pathname}?${urlSearchParams}`;

  redirect(route);
}
