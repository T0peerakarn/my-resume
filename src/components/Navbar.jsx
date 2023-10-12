import { navbar } from '../contents/navbar'
import { Flex } from '@chakra-ui/react'
import Navbutton from './Navbutton.jsx'

const Navbar = () => {
    return (
        <Flex
            as='header'
            position='fixed'
            width='100vw'
            height='7vh'
            backgroundColor='black'
            justifyContent='right'
        >
            {navbar.map((section, i) => <Navbutton key={i} section={section}/>)}
        </Flex>
    )
}

export default Navbar