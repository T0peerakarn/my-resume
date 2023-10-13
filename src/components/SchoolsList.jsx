import { Grid } from '@chakra-ui/react'
import School from './School'

const SchoolsList = ({ schools }) => {
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
            {schools.map((school, i) => <School key={i} school={school}/>)}
        </Grid>
    )
}

export default SchoolsList