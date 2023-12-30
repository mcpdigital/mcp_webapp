import Image from "next/image";
import Navbar from "@/components/NavBar";
import Title from "@/components/Title";
import Hero from "@/components/Hero";
import Middle from "@/components/middle";
import StepTracker from "@/components/useState";
import Footer from "@/components/Footer";
import FetchApi from "@/components/GithubFetch";
import FeaturesDiv from "@/components/FeaturesDiv";

const gradiente =
  "[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)]";
export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Title />
      </div>
      <div className="flex justify-center mt-[5px]">
        <StepTracker />
      </div>
      <div className="">
        <FetchApi />
      </div>

      <div className="flex justify-center mt-[5px]">
        <FeaturesDiv />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
