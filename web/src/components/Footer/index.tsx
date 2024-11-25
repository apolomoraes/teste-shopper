import { Container } from "./styles";

type FooterProps = {
  title?: string;
  display?: string;
}

export function Footer({title, display}: FooterProps) {
  return (
    <Container display={display}>
      <button>{title}</button>
    </Container>
  );
} 