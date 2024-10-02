import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema, WebFormType } from "../utils/schemas/schemas";
import Input from "./Input";
import { Button, Container, Flex, SimpleGrid, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons/faEarthEurope";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons/faBriefcaseClock";

const WebForm = () => {
  const methods = useForm<WebFormType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Container maxW="container.md" p={5} justifyContent={"center"}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
          <SimpleGrid
            columns={[1, 2]}
            spacing={1}
            minChildWidth={300}
            justifyContent={"center"}
          >
            <Input
              name="username"
              placeholder="Nombre"
              ariaDescribedBy={<FontAwesomeIcon icon={faUser} />}
            />
            <Input
              name="country"
              placeholder="País"
              ariaDescribedBy={<FontAwesomeIcon icon={faEarthEurope} />}
            />
            <Input
              name="email"
              type="email"
              placeholder="Correo"
              ariaDescribedBy={<FontAwesomeIcon icon={faAt} />}
            />
            <Input
              name="phone"
              type="tell"
              placeholder="Número de teléfono"
              ariaDescribedBy={<FontAwesomeIcon icon={faPhone} />}
            />
            <Input
              name="age"
              type="number"
              placeholder="Edad"
              min={18}
              max={100}
              ariaDescribedBy={<FontAwesomeIcon icon={faCalendar} />}
            />
            <Input
              name="url"
              type="url"
              placeholder="Escribe la URL de tu página web..."
              ariaDescribedBy={<FontAwesomeIcon icon={faLink} />}
            />
            <Input
              name="profession"
              placeholder="Profesión"
              ariaDescribedBy={<FontAwesomeIcon icon={faBriefcaseClock} />}
            />
            <Input
              name="search"
              type="search"
              placeholder="Busca una web registrada..."
            />
            <Flex
              direction="column"
              alignItems={"center"}
              justifyContent="center"
            >
              <Flex>
                <Input name="date" type="date" />
                <Input name="time" type="time" />
              </Flex>
              <Input name="datetime" type="datetime-local" />
            </Flex>

            <Flex
              direction="column"
              alignItems={"center"}
              justifyContent="center"
            >
              <Flex>
                <Spacer />
                <Input name="range" type="range" min={-10} max={10} hasLabel>
                  Deja tu valoración
                </Input>
                <Spacer />
              </Flex>
            </Flex>
          </SimpleGrid>

          <Button type="submit" colorScheme="blue" mt={5}>
            Enviar
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};

export default WebForm;
