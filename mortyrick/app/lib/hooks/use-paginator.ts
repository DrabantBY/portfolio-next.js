import { useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

const usePagiantor = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const page = Number(searchParams.get('page') ?? '1');

  const setPage = useCallback(
    (value: number) => {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.set('page', `${value}`);
      const url = `${pathName}?${urlSearchParams.toString()}`;
      replace(url);
    },
    [pathName, searchParams, replace]
  );

  return { page, setPage };
};

export default usePagiantor;
