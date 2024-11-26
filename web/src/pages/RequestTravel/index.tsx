import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"
import { Container } from "./styles"
import { Content } from "../../components/Content"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { useState } from "react"
import { api } from "../../services/api"
import { useTravel } from "../../hooks/travel"
import { TravelData } from "../../types/travel"
import { useNavigate } from "react-router-dom"

export function RequestTravel () {
  const [id, setId] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const { setData } = useTravel();

  const navigate = useNavigate();
  
  async function handleRequestTravel() {
    if(!id || !origin || !destination) {
      return alert("Preencha todos os campos");
    }

    try {
      const response = await api.post<TravelData>("/estimate", {
        customer_id: id,
        origin,
        destination
      })

      setData(response.data);

      navigate("/options");
    } catch (error) {
      return alert(error);
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Taxi App" description="Preencha o formulário abaixo para calcular sua rota"/>

      <Content>
        <Form legend="Informações da viagem">
          <Input 
          id="id" 
          title="ID" 
          width="20%" 
          required
          onChange={e => setId(e.target.value)}
          />
          <Input 
          id="origin" 
          title="Origem" 
          required
          onChange={e => setOrigin(e.target.value)}
          />
          <Input 
          id="destination" 
          title="Destino" 
          required
          onChange={e => setDestination(e.target.value)}
          />
        </Form>

      </Content>

      <Footer 
      title="Estimar valor"
      onClick={handleRequestTravel}
      />
    </Container>
  )
}