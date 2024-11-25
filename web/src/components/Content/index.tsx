import { ReactNode } from "react";
import { Container } from "./style";

type ContentProps = {
  children: ReactNode
}

export function Content({children}: ContentProps) {
  return (
    <Container>
      {children}
    </Container>
  );
} 