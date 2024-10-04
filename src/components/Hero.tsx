import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const Hero = () => (
  <Box
    bgGradient="linear(to-r, #E5D9F2, #CDC1FF, #A594F9)"
    pb={5}
    pt={5}
    ml={5}
    textAlign="center"
    position="relative"
    borderRadius={"15px 0px 0px 15px"}
  >
    <VStack spacing={1}>
      <Heading as="h1" size="xl" color="#393163">
        Bienvenido a WebRep
      </Heading>
      <Text fontSize="md" color="#5B5F96">
        Regístrata tu sitio web y descubre todo lo que podemos ofrecerte
      </Text>
      <Button
        colorScheme="purple"
        variant="solid"
        size="md"
        bgColor="#A594F9"
        color="white"
        _hover={{ bgColor: "#F5EFFF", color: "#A594F9" }}
      >
        Comenzar
      </Button>
    </VStack>
  </Box>
);

export default Hero;
