import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Importar iconos de flecha

const ExpandableFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      bgColor={isExpanded ? "#F5EFFF" : "#CDC1FF"}
      borderTopRadius={isExpanded ? "20px" : "10px"}
      transition="all 0.3s ease"
      height={isExpanded ? "320px" : "50px"}
      boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
    >
      <VStack spacing={1} p={1} align="center">
        <IconButton
          aria-label="Expand or Collapse"
          icon={isExpanded ? <FaChevronDown /> : <FaChevronUp />}
          onClick={toggleExpand}
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          color={isExpanded ? "##393163" : "#A594F9"}
        />

        {/* Información visible solo cuando está expandido */}
        {isExpanded && (
          <>
            <Text fontSize="md" color={"#393163"} m={3}>
              <strong>About:</strong> Esta aplicación te permite gestionar tus
              webs favoritas.
            </Text>
            <Text fontSize="sm" color={"#393163"} m={5}>
              Aquí puedes agregar, editar y eliminar tus enlaces favoritos.
            </Text>
            <Text fontSize="sm" color={"#393163"}>
              Versión 1.0.0
            </Text>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default ExpandableFooter;
