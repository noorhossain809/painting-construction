import { Button } from "@/components/ui/button";
import Header from "./component/common/Header";
import HeroSwiper from "./component/home/HeroBanner";

export default function Home() {
  return (
   <div className="absolute">
    <Header />
     <HeroSwiper />
     <div className="">
     <main className="">
       
        {/* rest of page
        <section className="mx-auto max-w-7xl px-4 py-16 text-gray-800">
          <h2 className="mb-4 text-2xl font-bold">Featured Projects</h2>
          <p>…</p>
        </section> */}
      </main>
    </div>
   </div>
  );
}
