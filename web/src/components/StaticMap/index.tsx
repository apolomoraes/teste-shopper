import { Container } from "./styles"

type StaticMapProps = {
  originLatitude: number | undefined,
  originLongitude: number | undefined,
  destinationLatitude: number | undefined
  destinationLongitude: number | undefined,
}

export function StaticMap({originLatitude, originLongitude, destinationLatitude, destinationLongitude}: StaticMapProps) {
  return (
    <Container>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x400&scale=2&markers=color:blue%7Clabel:A|${originLatitude},${originLongitude}&markers=color:red%7Clabel:B|${destinationLatitude},${destinationLongitude}&path=color:0x0000ff80|${originLatitude},${originLongitude}|${destinationLatitude},${destinationLongitude}&key=AIzaSyCawKG5rmtGFFubzyR5c63sIBwJzaEfIFQ`} alt="Mapa com marcadores de origem e destino" />
    </Container>
  )
}