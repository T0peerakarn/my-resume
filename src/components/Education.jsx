import { education } from '../contents/education'
import { Container } from '@chakra-ui/react'
import Title from './Title'
import SchoolsList from './SchoolsList'

const Education = () => {
    return (
        <Container
            height='100vh'
            textAlign='center'
            paddingTop='20vh'
            id='Education'
        >
            <Title text="Education"/>
            <SchoolsList schools={education.schools}/>
        </Container>
    )
}

export default Education