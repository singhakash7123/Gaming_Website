import Image from "next/image";
import Navbar from "./Header/page";
import Footer from "@/app/Footer/page";
import Subscribe from "./Subscribe/page";
import SocialMedia from "./SocialMedia/page";
import Hero from "./Components/Hero/page";
import Data from "./Components/Data/page.js";
import Community from "./Components/Community/page";
import About from "./Components/About/page";
import Updates from "./Components/Updates/page";
import Team from "./Components/Team/page";
import Testimonials from "./Components/Testimonials/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <Data/>
    <Community/>
    <About/>
    <Updates/>
    <Team/>
    <Testimonials/>
    </>
  );
}
