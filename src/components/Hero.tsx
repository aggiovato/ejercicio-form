import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const Hero = () => (
  <Box
    bgGradient="linear(to-r, #E5D9F2, #F5EFFF)"
    py={2}
    px={2}
    textAlign="center"
    position="relative"
  >
    <VStack spacing={2}>
      <Heading as="h1" size="2xl" color="#27374D">
        Bienvenido a WebRep
      </Heading>
      <Text fontSize="md" color="#526D82">
        Regístrate y descubre todo lo que podemos ofrecerte
      </Text>
      <Button
        colorScheme="purple"
        variant="solid"
        size="lg"
        bgColor="#A594F9"
        color="white"
        _hover={{ bgColor: "#F5EFFF", color: "#A594F9" }}
      >
        Comenzar
      </Button>
    </VStack>
    {/* Opcional: Imagen de fondo o decorativa */}
    {/*<Image
          src="/path/to/your/image.png"
          alt="Hero Image"
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          zIndex="-1"
          objectFit="cover"
          opacity="0.1"
        />*/}
  </Box>
);

export default Hero;
