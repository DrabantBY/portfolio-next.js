'use client';

import { usePathname } from 'next/navigation';
import FormFilterCharacter from '../form-filter-character';
import FormFilterEpisode from '../form-filter-episode';
import FormFilterLocation from '../form-filter-location';

const FormFilterSidebar = () => {
  const pathName = usePathname();

  switch (pathName) {
    case '/character':
      return <FormFilterCharacter sidebar={true} />;

    case '/episode':
      return <FormFilterEpisode sidebar={true} />;

    case '/location':
      return <FormFilterLocation sidebar={true} />;

    default:
      return null;
  }
};

export default FormFilterSidebar;
