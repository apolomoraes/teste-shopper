/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ApiError } from "../../types/apiError"
import { toast } from "react-toastify"

export function RequestTravel () {
  const [id, setId] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const { setData } = useTravel();

  const navigate = useNavigate();
  
  async function handleRequestTravel() {
    if(!id || !origin || !destination) {
      return toast.warn("Preencha todos os campos");
    }

    try {
      const response = await api.post<TravelData>("/estimate", {
        customer_id: id,
        origin,
        destination
      })

      setData(response.data);

      localStorage.setItem("@taxiapp:travelData", JSON.stringify({id, origin, destination}));

      toast.success("Sucesso")

      navigate("/options");
    } catch (error : any) {
      const apiError = error.response.data as ApiError;

      if(apiError) {
        return toast.error(apiError.error_description);
      } else {
        return toast.error("Ocorreu um erro ao estimar o valor da viagem, tente novamente mais tarde");
      }
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
          title="Cidade de origem" 
          required
          onChange={e => setOrigin(e.target.value)}
          />
          <Input 
          id="destination" 
          title="Cidade de destino" 
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