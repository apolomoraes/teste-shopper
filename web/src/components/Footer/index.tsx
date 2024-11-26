import { Container } from "./styles";

type FooterProps = {
  title?: string;
  display?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Footer({title, display, ...rest}: FooterProps) {
  return (
    <Container display={display}>
      <button {...rest}>{title}</button>
    </Container>
  );
} 