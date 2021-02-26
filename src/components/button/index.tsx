import { IconBaseProps } from 'react-icons';
import { ReactNode, ComponentType } from 'react';

import { Container } from './styles';

type ButtonProps = {
   children?: ReactNode;
   icon?: ComponentType<IconBaseProps>;
   isPrimary?: boolean;
   href?: string;
}

export default function Button({ children, icon: Icon, isPrimary, href }: ButtonProps) {
   return (
      <Container isPrimary={isPrimary} href={href} target="_blanket">
         {children}

         {Icon && <Icon size={18}/>}
      </Container>
   )
}