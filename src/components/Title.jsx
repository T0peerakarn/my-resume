import { Box, Heading } from '@chakra-ui/react'

const Title = ({ text }) => {
    return (
        <Box>
            <Heading>{text}</Heading>
        </Box>
    )
}

export default Title