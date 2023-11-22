import { Grid } from '@chakra-ui/react'
import Project from './Project'

const ProjectsList = ({ projects }) => {
    return (
        <Grid
            justifyContent='center'
            paddingTop='2vh'
            gap='1em'
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
            }}
        >
            {projects.map((project, i) => <Project key={i} project={project}/>)}
        </Grid>
    )
}

export default ProjectsList