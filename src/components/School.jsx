import { VStack, StackDivider, Card, CardBody, Heading, Text, Box } from '@chakra-ui/react'

const School = ({ school }) => {
    return (
        <Card
            height='16em'
            width='20em'
            transition='0.2s'
            _hover={{ boxShadow: 'lg' }}
        >
            <a
                href={school.link}
                target='_blank'
            >
                <CardBody>
                    <VStack
                        divider={<StackDivider />}
                    >
                        <Box>
                            <Heading
                                fontSize='1em'
                                height='2.5em'
                            >
                                {school.name}
                            </Heading>
                            <Text
                                fontSize='0.8em'
                                color='#718096'
                            >
                                {school.year}
                            </Text>
                        </Box>
                        <Text fontSize='1em'>{school.bio}</Text>
                    </VStack>
                </CardBody>
            </a>
        </Card>
    )
}

export default School