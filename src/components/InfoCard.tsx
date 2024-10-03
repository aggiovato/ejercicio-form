import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { InfoCardProps } from "../utils/schemas/schemas";

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
    backgroundColor: "#E5D9F2",
    color: "#27374D",
  };

  const buttonStyle = {
    backgroundColor: "#A594F9",
    top: "10px",
    right: "10px",
  };

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
        icon={<CloseIcon />}
        size={"sm"}
        onClick={onDelete}
        position={"absolute"}
        style={buttonStyle}
      />

      <CardHeader>
        <Heading size="sm" style={headerStyle}>
          {url}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="sm" m={0}>
          <strong>Correo:</strong> {email}
        </Text>
        <Text fontSize="sm" m={0}>
          <strong>País:</strong> {country}
        </Text>
        <Text fontSize="sm" m={0}>
          <strong>Teléfono:</strong> {phone}
        </Text>
      </CardBody>
      <Box as="footer" p={1} textAlign="center" style={footerStyle}>
        <Text fontSize="sm" pt={3}>
          Creado por {username}
        </Text>
      </Box>
    </Card>
  );
};

export default InfoCard;
