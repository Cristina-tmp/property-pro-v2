import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import { v4 as uuid } from "uuid";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Property Pro</title>
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      {/* main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* explore nearby */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data to fill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={uuid()}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        {/* end of explore nearby */}

        {/* live anywhere */}
        <section className="section">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* pull data from api */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={uuid()} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        {/* end of live anywhere */}

        {/* large card */}
        <LargeCard
          img="/largeCard_img.jpeg"
          title="The Greatest View"
          desc="Wishlist curated by Property Pro"
          buttonText="Get Inspired"
        />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();

  const res2 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = await res2.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
