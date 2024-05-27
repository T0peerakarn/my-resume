import { Grid } from '@chakra-ui/react'
import Internship from './Internship'

const InternshipsList = ({ internships }) => {
    return (
        <Grid
            justifyContent='center'
            paddingTop='3vh'
            gap='1em'
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
            }}
        >
            {internships.map((internship, i) => <Internship key={i} internship={internship}/>)}
        </Grid>
    )
}

export default InternshipsList