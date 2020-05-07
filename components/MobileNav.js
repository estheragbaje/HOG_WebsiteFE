import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
  Flex,
} from '@chakra-ui/core';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MainHeading from '../components/MainHeading';

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Image src="/assets/logo.png" alt="logo" size="80px" padding={4} />
        <Button variantColor="white" onClick={onOpen}>
          <Box as={AiOutlineMenu} size="40px" />
        </Button>
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/assets/logo.png" alt="logo" margin="auto" />
          </DrawerHeader>
          <DrawerBody>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              HOME
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              ABOUT
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              SERMONS
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              WEEKLY SERVICES
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              GIVE
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              CONTACT
            </MainHeading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;
