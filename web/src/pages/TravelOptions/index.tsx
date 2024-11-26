import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { StaticMap } from "../../components/StaticMap";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { DriverCard } from "../../components/DriverCard";
import { Title } from "../../components/Title";
import { useTravel } from "../../hooks/travel";

export function TravelOptions () {
  const { data } = useTravel();

  return (
    <Container>
      <Header title="Taxi App" description="Escolha a melhor opção de viagem para você"/>

      <Content>
        <Title title="Mapa estático com a rota"/>
        <StaticMap latitudeA={data?.origin.latitude} longitudeA={data?.origin.longitude} latitudeB={data?.destination.latitude} longitudeB={data?.destination.longitude}/>

        {
          data?.options &&
        <Title title="Opções de motoristas"/>
        }
        {
          data?.options.map(option => (
            <DriverCard
            key={option.id} 
            title={option.name}
            description={option.description}
            vehicle={option.vehicle}	
            rating={option.review.rating} 
            price={option.value}
            />
          ))
        }
      </Content>

      <Footer display="none"/>
    </Container>
  )
}