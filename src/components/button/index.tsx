import { IconBaseProps } from 'react-icons';
import { ReactNode, ComponentType } from 'react';

import { Container } from './styles';

type ButtonProps = {
   children?: ReactNode;
   icon?: ComponentType<IconBaseProps>;
}

export default function Button({ children, icon: Icon }: ButtonProps) {
   return (
      <Container>
         {children}

         {Icon && <Icon size={18}/>}
      </Container>
   )
}