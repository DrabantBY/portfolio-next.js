'use client';

import { memo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Box, Flex } from '@mantine/core';
import FieldSearch from '../field-search';
import BtnFilter from '../btn-filter';
import formFilterAction from '@/app/lib/actions/form-filter-action';

const FormFilterLocation = memo(({ sidebar }: { sidebar: boolean }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  return (
    <Box visibleFrom={sidebar ? undefined : 'md'}>
      <form action={formFilterAction.bind(null, pathName)}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 'xs', md: 0 }}
          align={{ base: 'flex-start', md: 'center' }}>
          <FieldSearch label="name" defaultValue={searchParams.get('name') ?? ''} />
          <FieldSearch label="type" defaultValue={searchParams.get('type') ?? ''} />
          <FieldSearch
            label="dimension"
            defaultValue={searchParams.get('dimension') ?? ''}
          />
          <BtnFilter sidebar={sidebar} />
        </Flex>
      </form>
    </Box>
  );
});

export default FormFilterLocation;
