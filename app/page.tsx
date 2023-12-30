import Image from "next/image";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Hero from "@/components/hero";
import Middle from "@/components/middle";
import StepTracker from "@/components/useState";
import Footer from "@/components/footer";
import FetchApi from "@/components/GithubFetch";
import FeaturesDiv from "@/components/FeaturesDiv";

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
