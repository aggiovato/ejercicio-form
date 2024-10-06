import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema, WebFormType } from "../utils/schemas/schemas";
import Input from "./Input";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
  useToast,
  Text,
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
import { FormEvent, useState } from "react";
import { country_prefix } from "../utils/schemas/schemas";

const WebForm = () => {
  const methods = useForm<WebFormType>({
    resolver: zodResolver(formSchema),
  });

  const toast = useToast();
  const [isHovered, setIsHovered] = useState([false, ""]);
  const [prefixValue, setPrefixValue] = useState("");

  const onSubmit = (data: WebFormType) => {
    const existingData = JSON.parse(
      localStorage.getItem("registeredWebs") || "[]"
    );

    const updatedData = [...existingData, data];
    localStorage.setItem("registeredWebs", JSON.stringify(updatedData));
    methods.reset();

    setPrefixValue("");

    const showToast = () => {
      toast({
        render: () => (
          <Box
            bg="#A594F9"
            color="#F5EFFF"
            p={1}
            borderRadius="md"
            boxShadow="md"
          >
            <Text fontWeight="bold" textAlign={"left"}>
              Enviado
            </Text>
            <Text textAlign={"center"}>El formulario web ha sido enviado!</Text>
          </Box>
        ),
        duration: 3000,
        isClosable: true,
      });
    };

    showToast();

    const event = new Event("updateSidebar");
    window.dispatchEvent(event);
  };

  const handleCountryInput = (e: FormEvent<HTMLInputElement>) => {
    const country = e.currentTarget.value;
    const phone = country_prefix.find((c) => c.country === country);
    const prefix = phone ? phone.phone : "";
    setPrefixValue(prefix);
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    console.log(phone);
    if (!phone.startsWith(prefixValue)) {
      setPrefixValue(prefixValue);
    }

    setPrefixValue(phone);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const prefix_length = prefixValue.length;
    input.setSelectionRange(prefix_length, prefix_length);
  };

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
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faUser}
                  shake={
                    isHovered[0] && isHovered[1] === "username" ? true : false
                  }
                />
              }
              onMouseEnter={() => setIsHovered([true, "username"])}
              onMouseLeave={() => setIsHovered([false, "username"])}
            />
            <Input
              name="country"
              placeholder="País"
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faEarthEurope}
                  shake={
                    isHovered[0] && isHovered[1] === "country" ? true : false
                  }
                />
              }
              onMouseEnter={() => setIsHovered([true, "country"])}
              onMouseLeave={() => setIsHovered([false, "country"])}
              onInput={handleCountryInput}
            />
            <Input
              name="email"
              type="email"
              placeholder="Correo"
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faAt}
                  shake={
                    isHovered[0] && isHovered[1] === "email" ? true : false
                  }
                />
              }
              onMouseEnter={() => setIsHovered([true, "email"])}
              onMouseLeave={() => setIsHovered([false, "email"])}
            />
            <Input
              name="phone"
              type="tell"
              placeholder="Número de teléfono"
              value={prefixValue}
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faPhone}
                  shake={
                    isHovered[0] && isHovered[1] === "phone" ? true : false
                  }
                />
              }
              onChange={handlePhoneInput}
              onFocus={handleFocus}
              onMouseEnter={() => setIsHovered([true, "phone"])}
              onMouseLeave={() => setIsHovered([false, "phone"])}
            />
            <Flex justifyContent={"space-evenly"}>
              <Input
                name="age"
                type="number"
                placeholder="Edad"
                min={18}
                max={100}
                ariaDescribedBy={
                  <FontAwesomeIcon
                    icon={faCalendar}
                    shake={
                      isHovered[0] && isHovered[1] === "age" ? true : false
                    }
                  />
                }
                onMouseEnter={() => setIsHovered([true, "age"])}
                onMouseLeave={() => setIsHovered([false, "age"])}
              />
            </Flex>
            <Input
              name="url"
              type="url"
              placeholder="Escribe la URL de tu página web..."
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faLink}
                  shake={isHovered[0] && isHovered[1] === "url" ? true : false}
                />
              }
              onMouseEnter={() => setIsHovered([true, "url"])}
              onMouseLeave={() => setIsHovered([false, "url"])}
            />
            <Input
              name="profession"
              placeholder="Profesión"
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faBriefcaseClock}
                  shake={
                    isHovered[0] && isHovered[1] === "profession" ? true : false
                  }
                />
              }
              onMouseEnter={() => setIsHovered([true, "profession"])}
              onMouseLeave={() => setIsHovered([false, "profession"])}
            />
            <Input
              name="search"
              type="search"
              placeholder="Busca una web registrada..."
              ariaDescribedBy={
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  shake={
                    isHovered[0] && isHovered[1] === "search" ? true : false
                  }
                />
              }
              onMouseEnter={() => setIsHovered([true, "search"])}
              onMouseLeave={() => setIsHovered([false, "search"])}
            />
            <Flex
              direction="column"
              alignItems={"center"}
              justifyContent="center"
              maxWidth="600px" // Limita el ancho máximo del formulario para evitar que se expanda demasiado
              mx="auto" // Centra el formulario en la pantalla
              p={4} // Padding interno para darle espacio
            >
              <Flex w="100%" justifyContent="space-between" mb={4}>
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
                rightIcon={
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    bounce={
                      isHovered[0] && isHovered[1] === "submit" ? true : false
                    }
                  />
                }
                bgColor="#A594F9"
                _hover={{ bgColor: "#F5EFFF", color: "#A594F9" }}
                onMouseEnter={() => setIsHovered([true, "submit"])}
                onMouseLeave={() => setIsHovered([false, "submit"])}
              >
                Enviar
              </Button>

              <Button
                colorScheme={"purple"}
                id="clean"
                mt={5}
                rightIcon={
                  <FontAwesomeIcon
                    icon={faTrash}
                    bounce={
                      isHovered[0] && isHovered[1] === "clean" ? true : false
                    }
                  />
                }
                bgColor={"#F5EFFF"}
                color={"#A594F9"}
                _hover={{
                  bgColor: "#A594F9",
                  color: "#F5EFFF",
                }}
                onMouseEnter={() => setIsHovered([true, "clean"])}
                onMouseLeave={() => setIsHovered([false, "clean"])}
                onClick={() => {
                  methods.reset();
                  setPrefixValue("");
                }}
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
