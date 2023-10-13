import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { Container, Divider } from '@chakra-ui/react'

const ActivityDetail = ({ activity, isOpen, onClose }) => {
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
                        {activity.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider/>
                    <ModalBody
                        paddingBottom='1em'
                        fontSize='1em'
                    >
                        {activity.bio}
                    </ModalBody>
                </Container>
            </ModalContent>
        </Modal>
    )
}

export default ActivityDetail