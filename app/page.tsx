import Image from "next/image";
import Navbar from "@/components/pages/home/Navbar";
import Title from "@/components/pages/home/Title";
import Hero from "@/components/pages/home/Hero";
import Middle from "@/components/pages/home/Middle";
import StepTracker from "@/components/useState";
import Footer from "@/components/pages/home/Footer";
import FetchGHUser from "@/components/pages/home/MyGithub";
import FeaturesDiv from "@/components/pages/home/Features";
// import UsingGradients from "@/components/ui/UsingGradients";

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
        <FetchGHUser />
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
