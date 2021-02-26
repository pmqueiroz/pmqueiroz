import { Container } from './styles';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Button from '../button';

export default function LinkTree() {
   return (
      <Container>
         <Button icon={FiGithub} isPrimary href="https://github.com/pmqueiroz"/>
         <Button icon={FiLinkedin} href="https://linkedin.com/in/pmqueiroz"/>
         <Button icon={FiInstagram} href="https://instagram.com/pmqueiroz"/>
      </Container>
   )
}