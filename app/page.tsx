import Image from "next/image";
import Title from "@/components/pages/home/Title";
import Hero from "@/components/pages/home/Hero";
import Middle from "@/components/pages/home/Middle";
import StepTracker from "@/components/pages/home/useState";
import Footer from "@/components/pages/home/Footer";
import FetchGHUser from "@/components/pages/home/MyGithub";
import FeaturesDiv from "@/components/pages/home/Features";
import Navbar from "@/components/pages/home/Navbar";
// import UsingGradients from "@/components/ui/UsingGradients";

export default function Home() {
  return (
    <main>
      <div className="">
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
