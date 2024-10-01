import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema, WebFormType } from "../utils/schemas/schemas";
import Input from "./Input";

const WebForm = () => {
  const methods = useForm<WebFormType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="username" placeholder="Nombre" />
        <Input name="country" placeholder="País" />
        <Input name="email" type="email" placeholder="Correo" />
        <Input
          name="url"
          type="url"
          placeholder="Escribe la URL de tu página web..."
        />
        <Input name="date" type="date" hasLabel>
          Fecha:
        </Input>
        <Input name="time" type="time" hasLabel>
          Hora:
        </Input>
        <Input name="datetime" type="datetime-local" hasLabel>
          Fecha y hora:
        </Input>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </FormProvider>
  );
};

export default WebForm;
