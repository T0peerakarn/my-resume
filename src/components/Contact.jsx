import { Box } from '@chakra-ui/react'

const Contact = ({ icon, link }) => {
    return (
        <a
            href={link}
            target='_blank'
        >
            <Box
                as={icon}
                boxSize={{
                    base: '2em',
                    sm: '2.5em'
                }}
                marginLeft={{
                    base: '0.8em',
                    sm: '1.5em'
                }}
                marginRight='1.5em'
            />
        </a>
    )
}

export default Contact