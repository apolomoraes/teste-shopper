import { Container } from "./styles";

interface DriverCardProps {
  title: string;
  description: string;
  vehicle: string;
  rating: number;
  price: string;
}
export function DriverCard({title, description, vehicle, rating, price}: DriverCardProps) {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{vehicle}</p>
      <p>{`${rating}/5`}</p>
      <p>{price}</p>

      <button>Escolher</button>
    </Container>
  )
}