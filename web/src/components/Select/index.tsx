import { Container } from "./styles";
import { useTravel } from "../../hooks/travel";

type SelectProps = {
  title: string
  width?: string
} & React.SelectHTMLAttributes<HTMLSelectElement> ;

export function Select({title, width,...rest}: SelectProps) {
  const { data } = useTravel();

  return (
    <Container width={width}>
      <label>{title}</label>
      <select {...rest} required>
        <option value="">Mostrar todos motoristas</option>
        {
          data?.options.map((option) => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))
        }
      </select>
    </Container>
  );
} 