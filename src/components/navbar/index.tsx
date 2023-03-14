import { Navbar, Text } from '@dathaplus/storybook';
import React from 'react';

import { textOption, textOptionButton, textOptionNested } from './style';

export const NavbarMenu = ({
  img = 'logo1.webp',
  activateColorInTop,
  color = 'white',
  colorClientsLogin = 'white',
}: {
  img?: string;
  activateColorInTop?: boolean;
  color?: string;
  colorClientsLogin?: string;
}) => (
  <Navbar
    logo={{
      src: `/img/${img}`,
      alt: 'logo',
      type: 'image',
      href: '/',
      width: '100%',
      height: '100%',
    }}
    activateColorInTop={activateColorInTop}
    options={[
      {
        ...textOption({ color }),
        children: 'about us',
        type: 'text',
        options: [
          {
            ...textOptionNested,
            type: 'text',
            children: 'aircraft management',
            href: '/aircraft-management',
          },
          {
            ...textOptionNested,
            type: 'text',
            children: 'investment opportunities',
            href: '/about',
          },
        ],
      },
      {
        ...textOption({ color }),
        type: 'text',
        children: 'Maintenance',
      },
      {
        ...textOption({ color }),
        type: 'text',
        children: 'contact us',
        href: '/contact',
      },
      {
        type: 'button',
        children: <Text {...textOptionButton({ color: colorClientsLogin })}>Clients login</Text>,
        styles: {
          width: '100%',
          borderRadius: 0,
          styleTheme: 'secondary',
          backgroundColor: 'transparent',
        },
      },
      {
        type: 'button',
        actions: {
          onClick: () => {
            window?.open('/form', '_self');
          },
        },
        children: (
          <Text {...textOptionButton({})} fontWeight={600}>
            Request a quote
          </Text>
        ),
        styles: {
          width: '100%',
          borderRadius: 0,
        },
      },
    ]}
  />
);