import { VStack, StackDivider, Card, CardBody, Heading, Text, Box } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import InternshipDetail from './InternshipDetail'

const Internship = ({ internship }) => {
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
                                    {internship.name}
                                </Heading>
                                <Text
                                    fontSize='0.8em'
                                    color='#718096'
                                >
                                    {internship.year}
                                </Text>
                            </Box>
                            <Text
                                fontSize='1em'
                                fontWeight='bold'
                                color='#4A5568'
                            >
                                {internship.role}
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
            </a>

            <InternshipDetail internship={internship} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Internship