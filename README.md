![Logo de la aplicación](./src/assets/logo_ej_1.svg)

# Ejercicio 1: Formulario - WebRep

Esta aplicación es un repositorio de sitios web para gestionar enlaces favoritos mediante un formulario validado con **Zod** y **TypeScript**, y estilizado con **Chakra UI**.

Puedes acceder a la aplicación en el siguiente enlace:
[form-webrep](https://form-webrep.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/01bc53e5-0358-4103-addb-c821fea5cf7a/deploy-status)](https://app.netlify.com/sites/form-webrep/deploys)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Proceso Paso a Paso](#proceso-paso-a-paso)
- [Ejemplo de Código](#ejemplo-de-código)
- [Estructura de Archivos](#estructura-de-archivos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Secciones del Sitio Web](#secciones-del-sitio-web)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ignorar Archivos](#ignorar-archivos)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción

Esta aplicación fue creada como parte de un ejercicio práctico para implementar formularios dinámicos y validar datos con tecnologías modernas como **Zod** para la validación de los esquemas de datos y **Chakra UI** para el diseño de la interfaz. Además, se utilizaron componentes modulares para estructurar la aplicación de manera limpia y eficiente. El formulario permite a los usuarios agregar, editar y eliminar sus sitios web favoritos.

## Proceso Paso a Paso

1. Se implementó un formulario con campos de entrada como fecha, hora, URL, entre otros.
2. Se validaron los datos ingresados por el usuario utilizando **Zod**.
3. La interfaz de usuario se diseñó con **Chakra UI** para garantizar una experiencia agradable y responsive.
4. Se manejaron los datos con almacenamiento local utilizando `localStorage` para preservar la información en la aplicación.
5. Se implementaron distintas secciones como el footer expandible, el sidebar con íconos sociales, y un header fijo.

## Ejemplo de Código

A continuación, el código de validación con **Zod**:

```ts
import { z } from "zod";

export const formSchema = z
  .object({
    username: z
      .string()
      .min(1, {
        message: errors.username.required,
      })
      .min(3, {
        message: errors.username.min,
      }),
    country: z
      .string()
      .min(1, {
        message: errors.country.required,
      })
      .min(3, {
        message: errors.country.min,
      })
      .max(25, {
        message: errors.country.max,
      })
      .refine((val) => country_name.includes(val), {
        message: errors.country.invalid,
      }),
    email: z
      .string()
      .min(1, {
        message: errors.email.required,
      })
      .email({
        message: errors.email.invalid,
      }),
    phone: z
      .string()
      .min(1, {
        message: errors.phone.required,
      })
      .regex(phone_regex, {
        message: errors.phone.invalid,
      }),
    age: z.coerce.number().min(18, {
      message: errors.age.invalid,
    }),
    url: z
      .string()
      .min(1, {
        message: errors.url.required,
      })
      .url({ message: errors.url.invalid }),
    profession: z
      .string()
      .min(1, {
        message: errors.profession.required,
      })
      .max(20, {
        message: errors.profession.max,
      }),
    search: z.string(),
    date: z.string(),
    time: z.string(),
    datetime: z.string(),
    range: z.coerce.number(),
  })
  .superRefine((data, context) => {
    const { country, phone } = data;
    const country_data = country_prefix.find((c) => c.country === country);

    if (!country_data) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: `El país "${country}" no tiene un prefijo definido`,
      });
      return;
    }

    if (!phone.startsWith(country_data.phone)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: `${errors.phone.wrong} ${country_data.phone}`,
      });
    }
  });
});
```

## Estructura de Archivos

El proyecto está organizado en la siguiente estructura de archivos:

```plaintext
src/
├── assets/                     # Imágenes y otros recursos estáticos
├── components/                 # Componentes de la aplicación
│ ├── ExpandableFooter.tsx
│ ├── Hero.tsx
│ ├── InfoCard.tsx
│ ├── Input.tsx
│ ├── InputRange.tsx
│ ├── MainContent.tsx
│ ├── SideBar.tsx
│ └── WebForm.tsx
├── styles/                     # Archivos de estilos en CSS o CSS Modules
│ ├── Input.module.css
│ └── InputRange.module.css
├── utils/                      # Utilidades, JSON y otros datos
│ ├── data/                     # Archivos JSON con datos para la app
│ │ ├── country_en.json
│ │ ├── errorMsg.json
│ │ ├── helpMsg.json
│ │ └── registeredWebs.json
│ ├── schemas/                  # Esquemas de validación (Zod)
│ │ └── schemas.ts
│ └── theme/                    # Temas personalizados de Chakra UI
│   └── theme.ts
├── App.tsx                     # Componente raíz
├── main.tsx                    # Punto de entrada de la aplicación
└── index.html                  # Archivo HTML principal
```

## Tecnologías Utilizadas

- **React**: Biblioteca principal para crear la interfaz de usuario.
- **TypeScript**: Tipado estático para un código más seguro y mantenible.
- **Zod**: Validación de datos en los formularios.
- **Font Awesome**: Para los íconos en la interfaz.
- **Google Fonts**: Para importar la fuente "Nunito".
- **Chakra UI**: Framework para crear interfaces modernas y accesibles.
- **Vite**: Herramienta para el desarrollo rápido de aplicaciones web.

### Secciones del Sitio Web

1. **Sidebar**: Menú lateral que contiene los enlaces favoritos del usuario.
2. **Main Content**: Área principal donde se muestra el contenido del formulario y los enlaces añadidos.
3. **Expandable Footer:**: Pie de página que se puede expandir para mostrar información adicional.

## Instalación

Clona el repositorio e intala las dependencias:

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
npm install
```

## Uso

Para ejecutar la aplicación en un entorno local:

```bash
npm run dev
```

## Ignorar Archivos

El archivo `.gitignore` está configurado para ignorar:

```bash
node_modules/
dist/
.env
```

## Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad `(git checkout -b feature-nueva-funcionalidad)`.
3. Haz commit de tus cambios `(git commit -m 'Agregada nueva funcionalidad')`.
4. Sube tus cambios `(git push origin feature-nueva-funcionalidad)`.
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia **MIT**.
