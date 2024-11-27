/* eslint-disable @typescript-eslint/no-explicit-any */
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { StaticMap } from "../../components/StaticMap";
import { Footer } from "../../components/Footer";
import { Container, BackButton } from "./styles";
import { DriverCard } from "../../components/DriverCard";
import { Title } from "../../components/Title";
import { useTravel } from "../../hooks/travel";
import { ArrowBendUpLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ApiError } from "../../types/apiError";

export function TravelOptions () {
  const { data } = useTravel();
  const [travelData, setTravelData] = useState<{
    id: string;
    origin: string;
    destination: string;
  } | null>(null);

  const navigation = useNavigate();

  async function handleConfirmTrip(driver: { id: number; name: string; price: number }) {
    try {
      await api.patch("/confirm", {
        customer_id: travelData?.id,
        origin: travelData?.origin,
        destination: travelData?.destination,
        distance: data?.distance,
        duration: data?.duration,
        driver: {
          id: driver.id,
          name: driver.name,
        },
        value: driver.price,
      })

      localStorage.removeItem("@taxiapp:travelData");

      alert("Viagem confirmada com sucesso!");
      navigation("/history");
    } catch (error : any) {
      const apiError = error.response.data as ApiError;

      if(apiError) {
        return alert(apiError.error_description);
      } else {
        return alert("Ocorreu um erro ao estimar o valor da viagem, tente novamente mais tarde");
      }
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem("@taxiapp:travelData");
    if (storedData) {
      setTravelData(JSON.parse(storedData));
    }
  }, [])

  return (
    <Container>
      <Header title="Taxi App" description="Escolha a melhor opção de viagem para você"/>

      <Content>
        <BackButton onClick={() => navigation("/")}>
          <ArrowBendUpLeft size={28} />
        </BackButton>
        <Title title="Mapa estático com a rota"/>
        <StaticMap originLatitude={data?.origin.latitude} originLongitude={data?.origin.longitude} destinationLatitude={data?.destination.latitude} destinationLongitude={data?.destination.longitude}/>

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
            onClick={() => handleConfirmTrip({
              id: option?.id,
              name: option?.name,
              price: option?.value
            })}
            />
          ))
        }
      </Content>

      <Footer display="none"/>
    </Container>
  )
}