import { Grid } from '@chakra-ui/react'
import Activity from './Activity'

const ActivitiesList = ({ activities }) => {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            paddingTop='3vh'
            gap='1em'
        >
            {activities.map((activity, i) => <Activity key={i} activity={activity}/>)}
        </Grid>
    )
}

export default ActivitiesList