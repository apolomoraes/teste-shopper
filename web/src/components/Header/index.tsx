import { Container } from "./styles"

type HeaderProps = {
  title: string;
  description: string;
}

export function Header({title, description}: HeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}