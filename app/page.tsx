import Image from "next/image";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Hero from "@/components/hero";
import Middle from "@/components/middle";
import Features from "@/components/features";
import StepTracker from "@/components/StepTracker";
import Footer from "@/components/footer";
import FetchApi from "@/components/fetchapi";
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

      <div className="flex justify-center">
        <Features />
      </div>
      <div>
        <Footer />
      </div>
      <div className="flex-row justify-center pt-[5px] w-full">
        <Middle />
      </div>
    </main>
  );
}
