import { about } from '../contents/about'
import { VStack } from '@chakra-ui/react'
import Title from './Title'
import Bio from './Bio'
import Contacts from './Contacts'

const About = () => {
    return (
        <VStack
            textAlign='center'
            spacing='4em'
            marginTop='14em'
        >
            <Title name={about.name}/>
            <Bio bio={about.bio}/>
            <Contacts contacts={about.contacts}/>
        </VStack>
    )
}

export default About

