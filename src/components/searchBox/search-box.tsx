// Packages
import { FiSearch } from 'react-icons/fi'

// Styles
import { Wrapper, Input } from './styles'

interface SearchBoxProps {
   placeholder?: string
}

export const SearchBox = (props: SearchBoxProps) => {
   const { placeholder } = props

   return (
      <Wrapper>
         <FiSearch size={20}/>
         <Input placeholder={placeholder}/>
      </Wrapper>
   )
}