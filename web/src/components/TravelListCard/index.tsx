import { ListTrips } from "../../types/listTrips";
import { Container } from "./styles";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function TravelListCard({data}: {data: ListTrips | null}) {
  function formatDuration(duration: string): string {
    const durationInSeconds = parseInt(duration.replace('s', ''), 10);

    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }

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
                <td>{`${ride.distance} Km`}</td>
                <td>{formatDuration(ride.duration)}</td>
                <td>{(Number(ride.value)).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}