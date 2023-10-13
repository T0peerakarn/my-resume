import { awards } from '../contents/awards'
import { Container } from '@chakra-ui/react'
import Title from './Title'
import AwardsList from './AwardsList'

const Awards = () => {
    return (
        <Container
            height={{
                base: '150vh',
                sm: '100vh'
            }}
            textAlign='center'
            paddingTop='20vh'
            id='Awards'
        >
            <Title text="Awards"/>
            <AwardsList awards={awards}/>
        </Container>
    )
}

export default Awards