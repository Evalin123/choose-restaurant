import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text
} from "@chakra-ui/react";
import { MdSend } from 'react-icons/md'

const RestaurantModel = ({ name, location, price, tel, businessHours, img, id }) => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<MdSend />}
        variant="link"
        _focus={{ border: "none" }}
      >更多資訊</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div h={151} w={634}>
            <Image bg='#000' objectFit="cover" filter="contrast(25%)" h={151} w={634} src={img} alt="Food Img" />
          </div>
          <ModalHeader w={200}>
            {name}
          </ModalHeader>
          <ModalCloseButton
            variant="unstyled"
            borderRadius={50}
            bg='#000'
            color='#fff'
            _focus={{ border: "none" }}
          />
          <ModalBody w={420} h={200}>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">地址 / {location}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">電話 / {tel}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">價位 / {price}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">營業時間 / {businessHours}</Text>
            <Text h={23} mb={15} fontSize={12} fontFamily="Roboto" color='#717A65;' >本資訊僅供參考，請以現場營業時間、訂位狀況為主</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              w={175}
              h={62}
              bg="#CC7B4E;"
              variant="unstyled"
              borderRadius={5}
              mr={105}
              color='#fff'
              onClick={() => {
                onClose();
                history.push(`/restaurant/${id}/after`)
              }}
            >
              就決定是你了
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RestaurantModel