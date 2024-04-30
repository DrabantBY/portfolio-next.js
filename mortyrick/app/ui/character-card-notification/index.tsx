'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Notification, Stack, ThemeIcon } from '@mantine/core';
import { IconHome, IconMapPin } from '@tabler/icons-react';
import classes from './styles.module.css';

type CharacterCardNotificationPropsType = {
  name: string;
  species: string;
  gender: string;
  status: string;
  type: string;
  origin: string;
  location: string;
};

const CharacterCardNotification = memo((props: CharacterCardNotificationPropsType) => {
  return (
    <Stack>
      <Notification radius="xs" title="Name" withCloseButton={false} withBorder>
        {props.name}
      </Notification>

      <Notification radius="xs" title="Species" withCloseButton={false} withBorder>
        {props.species}
      </Notification>

      <Notification radius="xs" title="Gender" withCloseButton={false} withBorder>
        {props.gender}
      </Notification>

      <Notification radius="xs" title="Status" withCloseButton={false} withBorder>
        {props.status}
      </Notification>

      <Notification radius="xs" title="Type" withCloseButton={false} withBorder>
        {props.type || 'unknown'}
      </Notification>

      <Notification
        renderRoot={(propsRoot) => <Link href="https://mantine.dev/" {...propsRoot} />}
        classNames={classes}
        icon={
          <ThemeIcon variant="light">
            <IconHome />
          </ThemeIcon>
        }
        title="Origin"
        withCloseButton={false}
        radius="xs"
        withBorder>
        {props.origin}
      </Notification>

      <Notification
        renderRoot={(propsRoot) => <Link href="https://mantine.dev/" {...propsRoot} />}
        classNames={classes}
        icon={
          <ThemeIcon variant="light">
            <IconMapPin />
          </ThemeIcon>
        }
        title="Location"
        withCloseButton={false}
        radius="xs"
        withBorder>
        {props.location}
      </Notification>
    </Stack>
  );
});

export default CharacterCardNotification;
