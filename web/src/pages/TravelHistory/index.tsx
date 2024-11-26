import { Header } from "../../components/Header";
import { Container, Fields, TravelList } from "./styles";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { TravelListCard } from "../../components/TravelListCard";

export function TravelHistory() {
  return (
    <Container>
      <Header title="Taxi App" description="Histórico de viagens"/>

      <Content>
        <Form legend="Informações da viagem">
          <Fields>
            <Input id="id" title="ID" required/>
            <Select title="Motorista"/>
          </Fields>
        </Form>

        <Title title="Lista de viagens"/>
        <TravelList>
          <TravelListCard travelDate="10/10/2021" driver="homer" origin="dores do rio preto" destination="espera feliz" distance={1000} duration="10:00" value={100}/>
        </TravelList>
      </Content>

      <Footer title="Aplicar filtro e buscar"/>
    </Container>
  )
}