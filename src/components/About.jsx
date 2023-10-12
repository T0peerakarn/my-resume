import { about } from '../contents/about'
import { VStack } from '@chakra-ui/react'
import Title from './Title'
import Bio from './Bio'
import Contacts from './Contacts'

const About = () => {
    return (
        <VStack
            height='100vh'
            justify='center'
            spacing='6em'
            id='About'
        >
            <Title text={about.name}/>
            <Bio bio={about.bio}/>
            <Contacts contacts={about.contacts}/>
        </VStack>
    )
}

export default About

