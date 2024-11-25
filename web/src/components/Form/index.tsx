import { ReactNode } from "react";
import { Container } from "./styles";

type FormProps = {
  children: ReactNode
  legend: ReactNode
}

export function Form({children, legend}: FormProps) {
  return (
    <Container>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </Container>
  );
} 