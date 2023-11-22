import { Container } from '@chakra-ui/react'
import SubTitle from './SubTitle'
import ProjectsList from './ProjectsList'

const Projects = ({ projects }) => {
    return (
        <Container>
            <SubTitle text='Project' />
            <ProjectsList projects={projects} />
        </Container>
    )
}

export default Projects