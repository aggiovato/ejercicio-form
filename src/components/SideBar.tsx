import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import jsonWebs from "../utils/data/registeredWebs.json";
import { Skeleton, useToast, VStack, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import { WebFormType, InfoCardProps } from "../utils/schemas/schemas";
import ExpandableFooter from "./ExpandableFooter";

const SideBar = () => {
  const [cards, setCards] = useState<InfoCardProps[]>([]);
  const toast = useToast();
  const registeredWebs: InfoCardProps[] = jsonWebs;

  useEffect(() => {
    const storedWebs: WebFormType[] = JSON.parse(
      localStorage.getItem("registeredWebs") || "[]"
    );
    if (storedWebs.length > 0) {
      setCards(
        storedWebs.slice(0, 3).map((web) => ({
          username: web.username,
          url: web.url,
          email: web.email,
          country: web.country,
          phone: web.phone,
        }))
      );
    } else {
      setCards(registeredWebs.slice(0, 3));
    }

    const handleSidebarUpdate = () => {
      const storedWebs: WebFormType[] = JSON.parse(
        localStorage.getItem("registeredWebs") || "[]"
      );
      setCards(
        storedWebs.slice(0, 3).map((web) => ({
          username: web.username,
          url: web.url,
          email: web.email,
          country: web.country,
          phone: web.phone,
        }))
      );
    };

    window.addEventListener("updateSidebar", handleSidebarUpdate);
    return () => {
      window.removeEventListener("updateSidebar", handleSidebarUpdate);
    };
  }, [registeredWebs]);

  const handleDelete = (index: number) => {
    if (window.confirm("¿Seguro que quieres eliminar este elemento?")) {
      const updatedCards = cards.filter((_, i) => i !== index);

      const storedWebs: WebFormType[] = JSON.parse(
        localStorage.getItem("registeredWebs") || "[]"
      );
      const updatedStoredWebs = storedWebs.filter((_, i) => i !== index);
      localStorage.setItem("registeredWebs", JSON.stringify(updatedStoredWebs));

      setCards(updatedCards);

      toast({
        title: "Sitio web eliminado con éxito!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box position="relative" p={0} m={0} height={"100%"}>
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <InfoCard
            key={index}
            url={card.url}
            username={card.username}
            email={card.email}
            country={card.country}
            phone={card.phone}
            onDelete={() => handleDelete(index)}
          />
        ))
      ) : (
        <VStack spacing={5} align="center" m={10}>
          <FontAwesomeIcon
            icon={faFaceSadCry}
            size="6x"
            color="#F5EFFF"
            opacity={0.5}
          />
          <Skeleton
            height="150px"
            width="100%"
            borderRadius="10px"
            startColor={"#F5EFFF"}
            endColor="#c2b5fc"
            speed={2}
          />
          <Skeleton
            height="20px"
            width="80%"
            borderRadius="10px"
            startColor={"#F5EFFF"}
            endColor="#c2b5fc"
            speed={2}
          />
          <Skeleton
            height="20px"
            width="60%"
            borderRadius="10px"
            startColor={"#F5EFFF"}
            endColor="#c2b5fc"
            speed={2}
          />
        </VStack>
      )}
      {cards.length >= 3 && (
        <Text mt={6} ml={6} fontSize="sm" fontWeight={"bold"} color={"#F5EFFF"}>
          Hay más elementos en el listado...
        </Text>
      )}
      <ExpandableFooter />
    </Box>
  );
};

export default SideBar;
