"use server";

export default async function filterDataAction(formData: FormData) {
  console.log(Object.fromEntries(formData));
}
