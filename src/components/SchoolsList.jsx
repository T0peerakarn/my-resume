import { Grid } from '@chakra-ui/react'
import School from './School'

const SchoolsList = ({ schools }) => {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            paddingTop='8vh'
            gap='1em'
        >
            {schools.map((school, i) => <School key={i} school={school}/>)}
        </Grid>
    )
}

export default SchoolsList