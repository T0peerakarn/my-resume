import { Box, Text } from '@chakra-ui/react'
import '../assets/styles.css'

const Navbutton = ({ section, current, setCurrent }) => {
    const className = (current === section.name) ? 'navbutton clicked' : 'navbutton'
    const href = '#'.concat(section.name)

    return (
        <Box
            width='fixed'
            display='flex'
            justifyContent='center'
            margin='auto 1vw'
        >
            <a href={href} onClick={() => setCurrent(section.id)} className={className}>
                <Text
                    textDecoration='none'
                    color='white'
                    fontSize='1em'
                    fontWeight='bold'
                    transition='0.2s'
                >
                    {section.name}
                </Text>
            </a>
        </Box>
    )
}

export default Navbutton