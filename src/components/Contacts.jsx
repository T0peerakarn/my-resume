import { Box } from '@chakra-ui/react'
import Contact from './Contact'

const Contacts = ({ contacts }) => {
    return (
        <Box
            display='flex'
            justifyContent='center'
        >
            {contacts.map((contact, i) => <Contact key={i} icon={contact.icon} link={contact.link}/>)}
        </Box>
    )
}

export default Contacts