import { Grid, GridItem } from "@chakra-ui/react";
import WebForm from "./WebForm";
import Hero from "./Hero";

const MainContent = () => {
  return (
    <Grid
      templateAreas={`"hero"
    "body"`}
      gridTemplateRows={{ sm: `150px 1fr`, md: `80px 1fr` }}
    >
      <GridItem pl={2} area={"hero"}>
        <Hero />
      </GridItem>
      <GridItem pl={2} mt={5} area={"body"}>
        <WebForm />
      </GridItem>
    </Grid>
  );
};

export default MainContent;
