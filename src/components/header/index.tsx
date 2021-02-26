import { Container, Link } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Button from '../button';

export default function Header () {
   const router = useRouter();

   console.log(router.pathname);
   
   return (
      <Container>
         <img src="logo.svg" alt="pmqueiroz"/>
         <nav>
            <Link href="/" isActive={router.pathname === '/'} >home</Link>
            <Link href="/contact" isActive={router.pathname === '/contact'} >contact</Link>
            <Link href="/about-me" isActive={router.pathname === '/about-me'} >about me</Link>
         </nav>
         <Button icon={FiPlus} />
      </Container>
   );
}