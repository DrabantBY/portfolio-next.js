'use client';

import { memo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Box, Flex } from '@mantine/core';
import FieldSearch from '../field-search';
import FieldSelect from '../field-select';
import BtnFilter from '../btn-filter';
import formFilterAction from '@/app/lib/actions/form-filter-action';

const FormFilterCharacter = memo(({ sidebar }: { sidebar: boolean }) => {
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
          <FieldSearch label="species" defaultValue={searchParams.get('species') ?? ''} />
          <FieldSelect
            label="status"
            defaultValue={searchParams.get('status')}
            options={['alive', 'dead', 'unknown']}
          />
          <FieldSelect
            label="gender"
            defaultValue={searchParams.get('gender')}
            options={['female', 'male', 'genderless', 'unknown']}
          />
          <BtnFilter sidebar={sidebar} />
        </Flex>
      </form>
    </Box>
  );
});

export default FormFilterCharacter;
