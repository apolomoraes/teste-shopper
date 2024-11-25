import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"
import { Container } from "./styles"
import { Content } from "../../components/Content"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"

export function RequestTravel () {
  return (
    <Container>
      <Header title="Taxi App" description="Preencha o formulário abaixo para calcular sua rota"/>

      <Content>
        <Form legend="Informações da viagem">
          <Input id="id" title="ID" width="20%" required/>
          <Input id="origin" title="Origem" required/>
          <Input id="destiny" title="Destino" required/>
        </Form>

      </Content>

      <Footer title="Estimar valor" />
    </Container>
  )
}