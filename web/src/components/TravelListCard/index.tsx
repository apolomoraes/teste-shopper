import { Container } from "./styles";

interface TravelListCard {
  travelDate: string;
  driver: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
}
export function TravelListCard({travelDate, driver, origin, destination, distance, duration, value}: TravelListCard) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Data e Hora</th>
          <th>motorista</th>
          <th>Origem da viagem</th>
          <th>Destino da viagem</th>
          <th>Distância</th>
          <th>Tempo</th>
          <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{travelDate}</td>
          <td>{driver}</td>
          <td>{origin}</td>
          <td>{destination}</td>
          <td>{distance}</td>
          <td>{duration}</td>
          <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}