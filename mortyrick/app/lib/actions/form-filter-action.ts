'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import handleFilterFormData from '../utils/handle-filter-form-data';

const formFilterAction = async (pathname: string, formData: FormData) => {
  const urlSearchParams = handleFilterFormData(formData);
  const url = `${pathname}?${urlSearchParams}`;
  revalidatePath(url);
  redirect(url);
};

export default formFilterAction;
