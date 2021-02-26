import { Container, Link } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function Header () {
   const router = useRouter();

   return (
      <Container>
         <img src="logo.svg" alt="pmqueiroz"/>
         <nav>
            <Link href="/" isActive={router.pathname === '/'} >home</Link>
            <Link href="/contact" isActive={router.pathname === '/contact'} >contact</Link>
            <Link href="/about-me" isActive={router.pathname === '/about-me'} >about me</Link>
         </nav>
         <button>
            <FiPlus size={18}/>
         </button>
      </Container>
   );
}