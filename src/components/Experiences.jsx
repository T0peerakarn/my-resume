import { experiences } from '../contents/experiences'
import { Container } from '@chakra-ui/react'
import Title from './Title'
import Researches from './Researches'
import Internships from './Internships'
import Activities from './Activities'

const Experiences = () => {
    return (
        <Container
            height='170vh'
            textAlign='center'
            paddingTop='20vh'
            id='Experiences'
        >
            <Title text="Experiences" />
            <Researches researches={experiences.researches} />
            <Internships internships={experiences.internships} />
            <Activities activities={experiences.activities} />
        </Container>
    )
}

export default Experiences