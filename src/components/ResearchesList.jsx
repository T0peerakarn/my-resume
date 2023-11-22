import { Grid } from '@chakra-ui/react'
import Research from './Research'

const ResearchesList = ({ researches }) => {
    return (
        <Grid
            justifyContent='center'
            paddingTop='3vh'
            gap='1em'
        >
            {researches.map((research, i) => <Research key={i} research={research}/>)}
        </Grid>
    )
}

export default ResearchesList