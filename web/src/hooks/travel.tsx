/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { TravelData } from '../types/travel';

type TravelContextProps = {
  data: TravelData | null;
  setData: React.Dispatch<React.SetStateAction<TravelData | null>>;
}

export const TravelContext = createContext<TravelContextProps | undefined>(undefined);

function TravelProvider({children}: { children: React.ReactNode }) {
  const [data, setData] = useState<TravelData | null>(null);

  return (
    <TravelContext.Provider value={{ data, setData }}>
      {children}
    </TravelContext.Provider>
  );
} 

function useTravel() {
  const context = useContext(TravelContext);

  if (!context) {
    throw new Error("useTravel deve ser usado dentro de um TravelProvider");
  }

  return context;
}

export {
  TravelProvider,
  useTravel
}