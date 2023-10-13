import { Grid } from '@chakra-ui/react'
import Award from './Award'

const AwardsList = ({ awards }) => {
    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
            }}
            justifyContent='center'
            justifyItems='center'
            paddingTop='8vh'
            gap='1em'
        >
            {awards.map((award, i) => <Award key={i} award={award}/>)}
        </Grid>
    )
}

export default AwardsList