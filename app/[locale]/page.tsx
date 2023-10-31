
import Header from "../components/ServerSideComp/Header"
import NavBar from "../components/ClientSideComp/NavBar"
import Translation from "../components/ServerSideComp/Translation"
import AboutUs from "../components/ServerSideComp/AboutUs"
import SocialMedia from "../components/ServerSideComp/SocialMedia"
import JoinCommunity from "../components/ServerSideComp/JoinCommunity"
import OurTeam from "../components/ServerSideComp/OurTeam"
export default function Home() {
  const t = Translation()
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <SocialMedia />
      <JoinCommunity />
      <OurTeam />
    </>
  )
}
