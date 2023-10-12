import { Box, Text } from '@chakra-ui/react'

const Bio = ({ bio }) => {
    return (
        <Box>
            <Text
                maxWidth='28em'
                textAlign='center'
            >
                {bio}
            </Text>
        </Box>
    )
}

export default Bio