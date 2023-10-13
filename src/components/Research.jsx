import { VStack, StackDivider, Card, CardBody, Heading, Text, Box } from '@chakra-ui/react'

const Research = ({ research }) => {
    return (
        <a
            href={research.link}
            target='_blank'
        >
            <Card
                height='15em'
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
                                {research.name}
                            </Heading>
                            <Text
                                fontSize='0.8em'
                                color='#718096'
                            >
                                {research.year}
                            </Text>
                        </Box>
                        <Text fontSize='1em'>{research.bio}</Text>
                    </VStack>
                </CardBody>
            </Card>
        </a>
    )
}

export default Research