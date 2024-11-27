import { Container } from "./styles";

interface DriverCardProps {
  title: string;
  description: string;
  vehicle: string;
  rating: number;
  price: number;
  onClick: () => void;
}
export function DriverCard({title, description, vehicle, rating, price, onClick}: DriverCardProps) {
  return (
    <Container>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{`${rating}/5`}</p>
        </div>
        <p>{description}</p>
      </div>
      <p>{vehicle}</p>

      <div>
        <button onClick={onClick}>Escolher</button>
        <p>{(price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
      </div>
    </Container>
  )
}