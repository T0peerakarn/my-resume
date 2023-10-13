import { navbar } from '../contents/navbar'
import { Flex } from '@chakra-ui/react'
import Navbutton from './Navbutton.jsx'

const Navbar = ({ current, setCurrent }) => {
    return (
        <Flex
            as='header'
            position='fixed'
            width='100vw'
            height='7vh'
            backgroundColor='black'
            justifyContent='right'
            zIndex='999'
        >
            {navbar.map((section, i) => 
                <Navbutton 
                    key={i}
                    section={section}
                    current={current} 
                    setCurrent={setCurrent}
                />
            )}
            
        </Flex>
    )
}

export default Navbar