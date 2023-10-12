import { Box, Text } from '@chakra-ui/react'

const Navbutton = ({ section }) => {
    const href = '#'.concat(String(section))
    return (
        <Box
            width='auto'
            display='flex'
            justifyContent='center'
            margin='auto 1vw'
        >
            <a href={href}>
                <Text
                    textDecoration='none'
                    color='white'
                    fontSize='1.2em'
                    fontWeight='bold'
                >
                    {String(section)}
                </Text>
            </a>
        </Box>
    )
}

export default Navbutton