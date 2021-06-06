// Packages
import { Box } from 'rebass'
import { useRouter } from 'next/router'

// Components
import { SearchBox } from '../searchBox'

// Styles
import { Wrapper } from './styles'
import LinkTree from '../LinkTree'

export default function Header () {
   const router = useRouter()

   return (
      <Wrapper>
         <SearchBox placeholder="Discover"/>
         <LinkTree/>
      </Wrapper>
   );
}