import { Container } from "./styles"

type StaticMapProps = {
  latitudeA: number,
  longitudeA: number,
  latitudeB: number,
  longitudeB: number
}

export function StaticMap({latitudeA, longitudeA, latitudeB, longitudeB}: StaticMapProps) {
  return (
    <Container>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x400&scale=2&markers=color:blue%7Clabel:A|${latitudeA},${longitudeA}&markers=color:red%7Clabel:B|${latitudeB},${longitudeB}&path=color:0x0000ff80|${latitudeA},${longitudeA}|${latitudeB},${longitudeB}&key=AIzaSyCawKG5rmtGFFubzyR5c63sIBwJzaEfIFQ`} alt="Mapa com marcadores de origem e destino" />
    </Container>
  )
}