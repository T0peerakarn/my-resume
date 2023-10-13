import { Grid } from '@chakra-ui/react'
import Award from './Award'

const AwardsList = ({ awards }) => {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            templateRows='repeat(2, 1fr)'
            justifyContent='center'
            paddingTop='8vh'
            gap='1em'
        >
            {awards.map((award, i) => <Award key={i} award={award}/>)}
        </Grid>
    )
}

export default AwardsList