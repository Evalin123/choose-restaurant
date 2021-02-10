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
import { ChevronRightIcon } from '@chakra-ui/icons'

const RestaurantModel = () => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} rightIcon={<ChevronRightIcon />} variant="link">更多資訊</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div h={151} w={634}>
            <Image bg='#000' objectFit="cover" opacity={0.3} h={151} w={634} src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Food Img" />
          </div>
          <ModalHeader w={200}>
            餐廳名稱
        </ModalHeader>
          <ModalCloseButton borderRadius={50} bg='#000' color='#fff' />
          <ModalBody w={420} h={200}>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">地址 / 微風百貨 1F</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">電話 / 02-2222-2222</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">價位 / $$$</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">營業時間 / 11-22</Text>
            <Text h={23} mb={15} fontSize={16} fontFamily="Roboto" color='#6B6B6B' bg='#ECECEC'>本資訊僅供參考，請以現場營業時間、訂位狀況為主</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              bg='#000'
              color='#fff'
              onClick={() => {
                onClose();
                history.push('/restaurant/:id/after')
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