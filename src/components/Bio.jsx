import { Box, Text } from '@chakra-ui/react'

const Bio = ({ bio }) => {
    return (
        <Box>
            <Text
                maxWidth='28em'
            >
                {bio}
            </Text>
        </Box>
    )
}

export default Bio