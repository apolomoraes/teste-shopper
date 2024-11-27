import { ListTrips } from "../../types/listTrips";
import { Container } from "./styles";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function TravelListCard({data}: {data: ListTrips | null}) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Data e Hora</th>
          <th>Motorista</th>
          <th>Origem da viagem</th>
          <th>Destino da viagem</th>
          <th>Distância</th>
          <th>Tempo</th>
          <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.rides.map((ride) => (
              <tr key={ride.id}>
                <td>{dayjs(ride.date).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}</td>
                <td>{ride.driver.name}</td>
                <td>{ride.origin}</td>
                <td>{ride.destination}</td>
                <td>{ride.distance}</td>
                <td>{ride.duration}</td>
                <td>{ride.value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}