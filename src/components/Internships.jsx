import { Container } from '@chakra-ui/react'
import SubTitle from './SubTitle'
import InternshipsList from './InternshipsList'

const Internships = ({ internships }) => {
    return (
        <Container>
            <SubTitle text='Internship' />
            <InternshipsList internships={internships} />
        </Container>
    )
}

export default Internships