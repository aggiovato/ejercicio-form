import { Flex, Grid, GridItem } from "@chakra-ui/react";
import WebForm from "./WebForm";
import Hero from "./Hero";

const MainContent = () => {
  return (
    <Grid
      templateAreas={`"hero"
    "body"
    "footer`}
      gridTemplateRows={{ sm: `130px 1fr`, md: `100px 1fr` }}
    >
      <Flex flexDirection={"column"}>
        <GridItem m={0} area={"hero"} mb={3}>
          <Hero />
        </GridItem>
        <GridItem mt={0} area={"body"}>
          <WebForm />
        </GridItem>
      </Flex>
    </Grid>
  );
};

export default MainContent;
