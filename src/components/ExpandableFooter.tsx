import { Box, HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaChevronUp,
  FaChevronDown,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ExpandableFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={0}
      width={380}
      borderTopRadius={isExpanded ? "20px" : "10px"}
      transition="all 0.3s ease"
      height={isExpanded ? "380px" : "50px"}
      boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
      bgGradient={isExpanded ? "linear(to-b, #E5D9F2, #CDC1FF)" : "#CDC1FF"}
    >
      <VStack spacing={1} p={1} align="center">
        <IconButton
          aria-label="Expand or Collapse"
          icon={isExpanded ? <FaChevronDown /> : <FaChevronUp />}
          onClick={toggleExpand}
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          color={isExpanded ? "#393163" : "#393163"}
        />

        {isExpanded && (
          <>
            <Text fontSize="md" color={"#393163"} m={4}>
              Esta aplicación te permite gestionar tus webs favoritas. Con una
              interfaz amigable y funcionalidades robustas, puedes agregar,
              editar y eliminar tus enlaces favoritos.
            </Text>
            <Text fontSize="sm" color={"#393163"} m={5}>
              ¡Gracias por usar nuestra aplicación! Tu feedback es importante
              para nosotros.
            </Text>
            <Text fontSize="sm" color={"#393163"}>
              Versión 1.0.0
            </Text>
            <HStack spacing={4} mt={3}>
              <Link href="https://www.instagram.com" isExternal>
                <IconButton
                  fontSize={20}
                  color={"#393163"}
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  colorScheme="transparent"
                  _hover={{ color: "#E4405F" }}
                />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <IconButton
                  fontSize={20}
                  color={"#393163"}
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  colorScheme="transparent"
                  _hover={{ color: "#1DA1F2" }} // color de hover de Twitter
                />
              </Link>
              <Link
                href="https://github.com/aggiovato/ejercicio-form.git"
                isExternal
              >
                <IconButton
                  fontSize={20}
                  color={"#393163"}
                  aria-label="GitHub"
                  icon={<FaGithub />}
                  colorScheme="transparent"
                  _hover={{ color: "#333" }} // color de hover de GitHub
                />
              </Link>
              <Link href="https://www.linkedin.com" isExternal>
                <IconButton
                  fontSize={20}
                  color={"#393163"}
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  colorScheme="transparent"
                  _hover={{ color: "#0077B5" }} // color de hover de LinkedIn
                />
              </Link>
            </HStack>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default ExpandableFooter;
