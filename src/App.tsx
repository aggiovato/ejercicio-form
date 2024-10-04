import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"`}
      gridTemplateRows={"40px 1fr"}
      gridTemplateColumns={{ sm: `0 1fr`, md: `380px 1fr` }}
    >
      <GridItem pl="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem
        bg="#A594F9"
        area={"nav"}
        h={"calc(100vh - 60px)"}
        borderRadius={"0px 15px 0px 0px"}
      >
        <SideBar />
      </GridItem>
      <GridItem area={"main"}>
        <MainContent />
      </GridItem>
    </Grid>
  );
};

export default App;
