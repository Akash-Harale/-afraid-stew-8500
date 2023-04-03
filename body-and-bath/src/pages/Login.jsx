import {
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Modal,
  ModalFooter,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LoginForm } from "../Components/LoginForm";
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="black" variant="link" onClick={onOpen}>
        Profile
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ width: "400px" }}>
          <Image
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8c1e9664/images/loyalty/xcat_rewards-update-evergreen_sp1_lacb.jpg?yocs=s_"
            alt="error"
          />

          <ModalCloseButton />
          <ModalBody>
            <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
              Login
            </Heading>
            <LoginForm onclose={onClose}/>
          </ModalBody>

          <ModalFooter>
            <Text fontSize="md">
              Not registered yet?
              <Link onClick={onClose} style={{ color: "#ff3f6c" }} to="/signup">
                Create an Account
              </Link>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;
