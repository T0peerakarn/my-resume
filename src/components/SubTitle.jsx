import { Box, Heading } from '@chakra-ui/react'

const SubTitle = ({ text }) => {
    return (
        <Box>
            <Heading
                size='lg'
                marginTop='2em'
            >
                {text}
            </Heading>
        </Box>
    )
}

export default SubTitle