
import Header from "../components/ServerSideComp/Header"
import NavBar from "../components/ClientSideComp/NavBar"
import Translation from "../components/ServerSideComp/Translation"
import AboutUs from "../components/ServerSideComp/AboutUs"
export default function Home() {
  const t = Translation()
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
    </>
  )
}
