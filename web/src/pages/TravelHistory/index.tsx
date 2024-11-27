/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from "../../components/Header";
import { Container, Fields, TravelList } from "./styles";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { TravelListCard } from "../../components/TravelListCard";
import { useState } from "react";
import { api } from "../../services/api";
import { ApiError } from "../../types/apiError";
import { ListTrips } from "../../types/listTrips";
import { toast } from "react-toastify"

export function TravelHistory() {
  const [customerId, setCustomerId] = useState("");
  const [driverId, setDriverId] = useState("");
  const [data, setData] = useState<ListTrips | null>(null);

  async function handleListTrips() {
    if(!customerId) {
      return toast.warn("Preencha o campo ID");
    }

    try {
      const response = await api.get<ListTrips>(`/${customerId}?driver_id=${driverId}`);


      setData(response.data);
    } catch (error : any) {
      const apiError = error.response.data as ApiError;

      if(apiError) {
        return toast.error(apiError.error_description);
      } else {
        return toast.error("Ocorreu um erro ao listar as viagens, tente novamente mais tarde");
      }
    }
  }
  
  return (
    <Container>
      <Header title="Taxi App" description="Histórico de viagens"/>

      <Content>
        <Form legend="Informações da viagem">
          <Fields>
            <Input 
            id="id" 
            title="ID" 
            required
            onChange={e => setCustomerId(e.target.value)}
            />
            <Select 
            title="Motorista"
            onChange={e => setDriverId(e.target.value)}
            />
          </Fields>
        </Form>

        {
          data?.rides && 
          <><Title title="Lista de viagens" /><TravelList>
            <TravelListCard data={data} />
          </TravelList></>
        }
      </Content>

      <Footer 
      title="Aplicar filtro e buscar"
      onClick={handleListTrips}
      />
    </Container>
  )
}