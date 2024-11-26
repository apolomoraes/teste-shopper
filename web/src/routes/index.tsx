import { BrowserRouter, Routes as AppRoutes , Route } from "react-router-dom";
import { RequestTravel } from "../pages/RequestTravel";
import { TravelOptions } from "../pages/TravelOptions";
import { TravelHistory } from "../pages/TravelHistory";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<RequestTravel />} />
        <Route path="/options" element={<TravelOptions />} />
        <Route path="/history" element={<TravelHistory />} />
      </AppRoutes>
    </BrowserRouter>
  )
}