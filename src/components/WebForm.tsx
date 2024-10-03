import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema, WebFormType } from "../utils/schemas/schemas";
import Input from "./Input";
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons/faEarthEurope";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons/faBriefcaseClock";
import InputRange from "./InputRange";
import {
  faMagnifyingGlass,
  faPaperPlane,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const WebForm = () => {
  const methods = useForm<WebFormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: WebFormType) => {
    const existingData = JSON.parse(
      localStorage.getItem("registeredWebs") || "[]"
    );
    const updatedData = [...existingData, data];
    localStorage.setItem("registeredWebs", JSON.stringify(updatedData));
    console.log("Datos guardados en localStorage:", updatedData);
    methods.reset();
  };

  useEffect(() => {
    fetch("../utils/data/registeredWeb.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos cargados desde el archivo JSON:", data);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });
  }, []);

  return (
    <Container maxW="container.md" p={4} justifyContent={"center"}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SimpleGrid
            columns={[1, 2]}
            spacing={1}
            minChildWidth={250}
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
            <Flex>
              <Spacer />
              <Input
                name="age"
                type="number"
                placeholder="Edad"
                min={18}
                max={100}
                ariaDescribedBy={<FontAwesomeIcon icon={faCalendar} />}
              />
              <Spacer />
            </Flex>
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
              ariaDescribedBy={<FontAwesomeIcon icon={faMagnifyingGlass} />}
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

            <InputRange name="range" min={-10} max={10} isStarable={true}>
              Déjanos una calificación
            </InputRange>
          </SimpleGrid>

          <Flex justifyItems={"space-around"}>
            <Spacer />
            <ButtonGroup gap={4}>
              <Button
                type="submit"
                colorScheme="blue"
                mt={5}
                rightIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                style={{ backgroundColor: "#A594F9" }}
              >
                Enviar
              </Button>

              <Button
                colorScheme={"purple"}
                mt={5}
                rightIcon={<FontAwesomeIcon icon={faTrash} />}
                style={{ backgroundColor: "#F5EFFF", color: "#A594F9" }}
                onClick={() => methods.reset()}
              >
                Limpiar
              </Button>
            </ButtonGroup>
            <Spacer />
          </Flex>
        </form>
      </FormProvider>
    </Container>
  );
};

export default WebForm;
