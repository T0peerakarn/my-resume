import { VStack, StackDivider, Card, CardBody, Heading, Text, Box } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import ActivityDetail from './ActivityDetail'

const Activity = ({ activity }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <a
                onClick={onOpen}
                style={{ cursor: 'pointer' }}
            >
                <Card
                    height='9em'
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
                                    height='2.5em'
                                >
                                    {activity.name}
                                </Heading>
                                <Text
                                    fontSize='0.8em'
                                    color='#718096'
                                >
                                    {activity.year}
                                </Text>
                            </Box>
                            <Text
                                fontSize='1em'
                                fontWeight='bold'
                                color='#4A5568'
                            >
                                {activity.role}
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
            </a>

            <ActivityDetail activity={activity} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Activity