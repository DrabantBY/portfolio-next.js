"use client";

import ErrorNotFound from "@/ui/error-not-found";
import type { ErrorPageType } from "@/types/error";

const Error = ({ error }: ErrorPageType) => {
  console.log(error.name);
  return <ErrorNotFound message={error.message} />;
};

export default Error;
