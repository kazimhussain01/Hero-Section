import Image from "next/image";
import Navbartop from "./component/section/Navbartop";
import Navbar from "./component/section/Navbar";
import HeroSection from "./component/section/Hero";
import AboutUs from "./component/section/About";
import ServicesSection from "./component/section/Services";
import WhyChooseUsSection from "./component/section/Choose";
import ReadyToTrySection from "./component/section/Ready-Our-Service";
import Footer from "./component/section/Footer";
import Contact from "./component/section/Contact";

export default async function Home() {
  return (
    <div>
      <Navbartop />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReadyToTrySection />
      <Contact /> 
      <Footer />
    </div>
  );
}
