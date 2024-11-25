import { Container } from "./styles";

type InputProps = {
  id: string
  title: string
  width?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({id, title, width,...rest}: InputProps) {
  return (
    <Container width={width}>
      <label htmlFor={id}>{title}</label>
      <input id={id} {...rest}/>
    </Container>
  );
} 