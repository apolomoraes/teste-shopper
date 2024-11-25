import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { StaticMap } from "../../components/StaticMap";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { DriverCard } from "../../components/DriverCard";
import { Title } from "../../components/Title";

export function TravelOptions () {
  return (
    <Container>
      <Header title="Taxi App" description="Escolha a melhor opção de viagem para você"/>

      <Content>
        <Title title="Mapa estático com a rota"/>
        <StaticMap latitudeA={-22.9068576} longitudeA={-43.172936199999995} latitudeB={-20.688644800000002} longitudeB={-41.847632499999996}/>

        <Title title="Opções de motoristas"/>
        <DriverCard title="Motorista 1" description="Motorista 1" vehicle="Carro" rating={4} price="R$ 100,00"/>
        <DriverCard title="Motorista 1" description="Motorista 1" vehicle="Carro" rating={4} price="R$ 100,00"/>
        <DriverCard title="Motorista 1" description="Motorista 1" vehicle="Carro" rating={4} price="R$ 100,00"/>
      </Content>

      <Footer display="none"/>
    </Container>
  )
}