import { Box, Heading } from '@chakra-ui/react'

const Title = ({ name }) => {
    return (
        <Box>
            <Heading>{name}</Heading>
        </Box>
    )
}

export default Title