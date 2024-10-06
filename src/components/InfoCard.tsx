import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { InfoCardProps } from "../utils/schemas/schemas";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const InfoCard = ({
  username = "Aggiovato",
  url = "https://this-app-example.com",
  email = "aggiovato@gmail.com",
  phone = "+34623267022",
  country = "Spain",
  onDelete,
}: InfoCardProps) => {
  const cardStyle = {
    backgroundColor: "#F5EFFF",
    borderColor: "#CDC1FF",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    color: "#A594F9",
  };

  const footerStyle = {
    backgroundColor: "#CDC1FF",
    color: "#27374D",
    borderRadius: "0px 0px 10px 10px",
    fontSize: "px",
  };

  const buttonStyle = {
    backgroundColor: "#A594F9",
    top: "10px",
    right: "10px",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      variant="outline"
      style={cardStyle}
      size={"sm"}
      m={5}
      borderRadius={10}
    >
      <IconButton
        aria-label="Eliminar card"
        icon={
          <FontAwesomeIcon icon={faXmark} bounce={isHovered ? true : false} />
        }
        size={"sm"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onDelete}
        position={"absolute"}
        fontSize={"md"}
        style={buttonStyle}
      />

      <CardHeader>
        <Heading size="sm" style={headerStyle} m={0} p={0}>
          <Link
            href={url}
            isExternal
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {url} <ExternalLinkIcon mx="2px" />
          </Link>
        </Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="sm" m={0} textColor={"#393161"}>
          <strong>Correo:</strong> {email}
        </Text>
        <Text fontSize="sm" m={0} textColor={"#393161"}>
          <strong>País:</strong> {country}
        </Text>
        <Text fontSize="sm" m={0} textColor={"#393161"}>
          <strong>Teléfono:</strong> {phone}
        </Text>
      </CardBody>
      <Box as="footer" textAlign="center" style={footerStyle}>
        <Text
          fontSize="15px"
          pt={4}
          textColor={"#393161"}
          fontWeight={"bold"}
          fontStyle={"italic"}
        >
          Creado por {username}
        </Text>
      </Box>

      {isHovered && (
        <Popover isOpen={isHovered} placement="right">
          <PopoverTrigger>
            <Box />
          </PopoverTrigger>
          <PopoverContent
            width="300px"
            height="270px"
            p={0}
            borderRadius={"10px"}
            bgColor={"#CDC1FF"}
            alignItems={"center"}
            zIndex={1000}
          >
            <iframe
              src={url}
              title="preview"
              width="100%"
              height="100%"
              style={{ borderRadius: "10px", border: "none" }}
            />
          </PopoverContent>
        </Popover>
      )}
    </Card>
  );
};

export default InfoCard;
