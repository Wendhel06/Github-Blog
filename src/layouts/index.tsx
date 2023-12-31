import { Header } from "../components/header";
import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}