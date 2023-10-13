import { Grid } from '@chakra-ui/react'
import Internship from './Internship'

const InternshipsList = ({ internships }) => {
    return (
        <Grid
            justifyContent='center'
            paddingTop='3vh'
            gap='1em'
        >
            {internships.map((internship, i) => <Internship key={i} internship={internship}/>)}
        </Grid>
    )
}

export default InternshipsList