import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Nunito', sans-serif", // Fuente para todo el cuerpo del texto
    heading: "'Nunito', sans-serif", // Fuente para los encabezados
  },
});

export default theme;
