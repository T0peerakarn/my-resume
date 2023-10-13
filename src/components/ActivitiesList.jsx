import { Grid } from '@chakra-ui/react'
import Activity from './Activity'

const ActivitiesList = ({ activities }) => {
    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
            }}
            justifyItems='center'
            justifyContent='center'
            paddingTop='3vh'
            gap='1em'
        >
            {activities.map((activity, i) => <Activity key={i} activity={activity}/>)}
        </Grid>
    )
}

export default ActivitiesList