import { Container } from "./styles";

type TitleProps = {
  title: string
}

export function Title({title}: TitleProps) {
  return (
    <Container>{title}</Container>
  );
}