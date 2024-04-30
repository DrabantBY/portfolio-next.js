import { memo } from 'react';
import { Box, Divider, Select } from '@mantine/core';
import BtnInput from '../btn-input';
import useFieldSelect from '@/app/lib/hooks/use-field-select';
import type { FieldSelectLabelType } from '@/app/types/form';
import classes from './styles.module.css';

type FieldSelectPropsType = {
  label: FieldSelectLabelType;
  defaultValue: string | null;
  options: string[];
};

const FieldSelect = memo(({ label, defaultValue, options }: FieldSelectPropsType) => {
  const { pending, value, isEmpty, isFloat, onChange, onReset } =
    useFieldSelect(defaultValue);

  return (
    <Box mr="xs">
      <Select
        classNames={classes}
        name={label}
        label={label}
        data={[{ group: 'select', items: options }]}
        disabled={pending}
        value={value}
        onChange={onChange}
        data-float={isFloat}
        labelProps={{ 'data-float': isFloat }}
        w={{ base: '100%', md: 130 }}
        variant="unstyled"
        rightSectionPointerEvents={isEmpty ? 'auto' : 'none'}
        rightSection={
          <BtnInput
            type="select"
            isEmpty={isEmpty}
            disabled={pending}
            onReset={onReset}
          />
        }
        comboboxProps={{
          shadow: 'md',
          size: 'sm',
          offset: 0,
          dropdownPadding: 0,
        }}
      />
      <Divider size="sm" color={isFloat ? 'indigo.4' : undefined} />
    </Box>
  );
});

export default FieldSelect;
