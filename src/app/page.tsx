import Image from "next/image";
import Navbartop from "./component/Navbartop";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

export default async function Home() {
  return (
    <div>
      <Navbartop />
      <Navbar />
      <Hero />
    </div>
  );
}
