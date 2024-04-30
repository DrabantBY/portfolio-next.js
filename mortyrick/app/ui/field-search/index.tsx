import { memo } from 'react';
import { Box, Divider, TextInput } from '@mantine/core';
import BtnInput from '../btn-input';
import useFieldSearch from '@/app/lib/hooks/use-field-search';
import type { FieldSearchLabelType } from '@/app/types/form';
import classes from './styles.module.css';

type FieldSearchPropsType = {
  label: FieldSearchLabelType;
  defaultValue: string;
};

const FieldSearch = memo(({ label, defaultValue }: FieldSearchPropsType) => {
  const { pending, value, isEmpty, isFloat, onFocus, onBlur, onChange, onReset } =
    useFieldSearch(defaultValue);

  return (
    <Box mr="xs">
      <TextInput
        classNames={classes}
        name={label}
        label={label}
        placeholder=" . . ."
        disabled={pending}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        data-float={isFloat}
        labelProps={{ 'data-float': isFloat }}
        w={{ base: '100%', md: 130 }}
        variant="unstyled"
        rightSectionPointerEvents={isEmpty ? 'auto' : 'none'}
        rightSection={
          <BtnInput
            type="search"
            isEmpty={isEmpty}
            disabled={pending}
            onReset={onReset}
          />
        }
      />
      <Divider size="sm" color={isFloat ? 'indigo.4' : undefined} />
    </Box>
  );
});

export default FieldSearch;
