import { Box } from '@chakra-ui/react'

const Contact = ({ icon, link }) => {
    return (
        <a href={link}>
            <Box
                as={icon}
                boxSize='2.5em'
                marginLeft='1.5em'
                marginRight='1.5em'
            />
        </a>
    )
}

export default Contact