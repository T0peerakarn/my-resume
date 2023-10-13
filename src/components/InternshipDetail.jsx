import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { Container, Divider } from '@chakra-ui/react'

const InternshipDetail = ({ internship, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size='lg'
        >
            <ModalOverlay />
            <ModalContent>
                <Container>
                    <ModalHeader
                        fontSize='1em'
                    >
                        {internship.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider/>
                    <ModalBody
                        paddingBottom='1em'
                        fontSize='1em'
                    >
                        {internship.bio}
                    </ModalBody>
                </Container>
            </ModalContent>
        </Modal>
    )
}

export default InternshipDetail