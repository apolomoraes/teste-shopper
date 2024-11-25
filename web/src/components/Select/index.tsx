import { Container } from "./styles";

type SelectProps = {
  title: string
  width?: string
} & React.SelectHTMLAttributes<HTMLSelectElement> ;

export function Select({title, width,...rest}: SelectProps) {
  return (
    <Container width={width}>
      <label>{title}</label>
      <select {...rest} required>
        <option value="">Mostrar todos motoristas</option>
        <option value="">Homer</option>
        <option value="">Toretto</option>
        <option value="">James</option>
      </select>
    </Container>
  );
} 