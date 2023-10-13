import { Container } from '@chakra-ui/react'
import SubTitle from './SubTitle'
import ActivitiesList from './ActivitiesList'

const Activities = ({ activities }) => {
    return (
        <Container>
            <SubTitle text='Activity' />
            <ActivitiesList activities={activities} />
        </Container>
    )
}

export default Activities