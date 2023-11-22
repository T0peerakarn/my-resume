import { VStack, StackDivider, Card, CardBody, Heading, Text, Box } from '@chakra-ui/react'

const Project = ({ project }) => {
    return (
        <a
            href={project.link}
            target='_blank'
        >
            <Card
                height='10em'
                width='20em'
                transition='0.2s'
                _hover={{ boxShadow: 'lg' }}
            >
                <CardBody>
                    <VStack
                        divider={<StackDivider />}
                    >
                        <Box>
                            <Heading
                                fontSize='1em'
                            >
                                {project.name}
                            </Heading>
                            <Text
                                fontSize='0.8em'
                                color='#718096'
                            >
                                {project.year}
                            </Text>
                        </Box>
                        <Text fontSize='1em' fontWeight='bold' color='#4A5568'>{project.role}</Text>
                    </VStack>
                </CardBody>
            </Card>
        </a>
    )
}

export default Project