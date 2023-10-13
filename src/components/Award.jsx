import { VStack, StackDivider, Card, CardBody, Heading, Text, Box } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import AwardDetail from './AwardDetail'

const Award = ({ award }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (e) => {
        e.preventDefault()
        onOpen();
    }
    return (
        <>
            <a
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
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
                                    height='2.5em'
                                >
                                    {award.name}
                                </Heading>
                                <Text
                                    fontSize='0.8em'
                                    color='#718096'
                                >
                                    {award.year}
                                </Text>
                            </Box>
                            <Text
                                fontSize='1em'
                                fontWeight='bold'
                                color='#4A5568'
                            >
                                {award.rank}
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
            </a>

            <AwardDetail award={award} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Award