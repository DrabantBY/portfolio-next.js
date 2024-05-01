'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Notification, Stack, ThemeIcon } from '@mantine/core';
import { IconHome, IconMapPin, IconExternalLink } from '@tabler/icons-react';
import classes from './styles.module.css';

type CharacterCardNotificationPropsType = {
  name: string;
  species: string;
  gender: string;
  status: string;
  type: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
};

const CharacterCardNotification = memo((props: CharacterCardNotificationPropsType) => {
  return (
    <Stack gap="xs">
      <Notification
        radius="xs"
        title="Name"
        withCloseButton={false}
        withBorder
        color="indigo.4">
        {props.name}
      </Notification>

      <Notification
        radius="xs"
        title="Species"
        withCloseButton={false}
        withBorder
        color="indigo.4">
        {props.species}
      </Notification>

      <Notification
        radius="xs"
        title="Gender"
        withCloseButton={false}
        withBorder
        color="indigo.4">
        {props.gender}
      </Notification>

      <Notification
        radius="xs"
        title="Status"
        withCloseButton={false}
        withBorder
        color="indigo.4">
        {props.status}
      </Notification>

      <Notification
        radius="xs"
        title="Type"
        withCloseButton={false}
        withBorder
        color="indigo.4">
        {props.type || 'unknown'}
      </Notification>

      <Notification
        renderRoot={(propsRoot) => <Link href={props.origin.url} {...propsRoot} />}
        classNames={classes}
        icon={
          <ThemeIcon variant="light">
            <IconHome />
          </ThemeIcon>
        }
        title="Origin location"
        withCloseButton
        closeButtonProps={{
          icon: <IconExternalLink color="var(--mantine-color-indigo-3)" />,
        }}
        radius="xs"
        withBorder>
        {props.origin.name}
      </Notification>

      <Notification
        renderRoot={(propsRoot) => <Link href={props.location.url} {...propsRoot} />}
        classNames={classes}
        icon={
          <ThemeIcon variant="light">
            <IconMapPin />
          </ThemeIcon>
        }
        title="Last location"
        withCloseButton
        closeButtonProps={{
          icon: <IconExternalLink color="var(--mantine-color-indigo-3)" />,
        }}
        radius="xs"
        withBorder>
        {props.location.name}
      </Notification>
    </Stack>
  );
});

export default CharacterCardNotification;
