import { Container } from '@chakra-ui/react'
import SubTitle from './SubTitle'
import ResearchesList from './ResearchesList'

const Researches = ({ researches }) => {
    return (
        <Container>
            <SubTitle text='Reseach' />
            <ResearchesList researches={researches} />
        </Container>
    )
}

export default Researches