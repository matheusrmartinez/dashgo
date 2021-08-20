import { Icon, Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import React from 'react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
}

export function NavLink({children, icon, ...rest}: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="meidum">
        {children}
      </Text>
    </Link>
  );
}
