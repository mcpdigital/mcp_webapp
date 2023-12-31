import Image from "next/image";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import StepTracker from "@/components/useState";
import Footer from "@/components/Footer";
import FetchApi from "@/components/GithubFetch";
import FeaturesDiv from "@/components/FeaturesDiv";
import UsingGradients from "@/components/UsingGradients";

import { RAD_PURPLE } from "@/tw_gradients";
export default function Home() {
  return (
    <main>
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
