import { Grid, GridItem, IconButton, useDisclosure } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={`"nav main"`}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={{ base: "0 1fr", md: "380px 1fr" }}
      minHeight={"100vh"}
    >
      {/* Botón de hamburguesa */}
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        display={{ base: "block", md: "none" }} // Mostrar solo en pantallas pequeñas
        aria-label="Toggle Sidebar"
        position="fixed"
        zIndex={10}
        top={8}
        right={3}
      />

      {/* Sidebar */}
      <GridItem
        area={"nav"}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }} // Ocultar en pantallas pequeñas
        bg="#A594F9"
        position={{ base: "fixed", md: "relative" }}
        mt={5}
        flexDirection={"column"}
        borderRadius={"0px 15px 0px 0px"}
        zIndex={5}
        width={380}
        minHeight={"calc(100vh - 20px)"}
        transition="1.8s"
      >
        <SideBar />
      </GridItem>

      {/* Contenido principal */}
      <GridItem area={"main"} mt={5}>
        <MainContent />
      </GridItem>
    </Grid>
  );
};

export default App;
