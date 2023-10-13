import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { Container, Divider } from '@chakra-ui/react'

const AwardDetail = ({ award, isOpen, onClose }) => {
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
                        {award.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider/>
                    <ModalBody
                        paddingBottom='1em'
                        fontSize='1em'
                    >
                        {award.bio}
                    </ModalBody>
                </Container>
            </ModalContent>
        </Modal>
    )
}

export default AwardDetail