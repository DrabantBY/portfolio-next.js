import { memo } from 'react';
import Link from 'next/link';
import { NavLink } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

type RouteLinkPropsType = {
  href: { pathname: string; query: { page: number } };
  label: string;
  active: boolean;
  isRightSection: boolean;
};

const RouteLink = memo(({ href, label, active, isRightSection }: RouteLinkPropsType) => {
  return (
    <NavLink
      component={Link}
      href={href}
      label={label}
      active={active}
      variant="light"
      w={{ base: '100%', md: 120 }}
      ta={{ base: 'left', md: 'center' }}
      tt="uppercase"
      rightSection={isRightSection ? <IconExternalLink /> : null}
    />
  );
});

export default RouteLink;
