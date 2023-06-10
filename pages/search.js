import Header from "@/components/Header";
import React from "react";
import { useRouter } from "next/router";
import { format, isValid, parseISO } from "date-fns";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  //   const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  //   const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  //   const range = `${formattedStartDate} - ${formattedEndDate}`;

  // Validate startDate and endDate
  const parsedStartDate = isValid(parseISO(startDate))
    ? new Date(startDate)
    : null;
  const parsedEndDate = isValid(parseISO(endDate)) ? new Date(endDate) : null;

  const formattedStartDate = parsedStartDate
    ? format(parsedStartDate, "dd MMMM yy")
    : "";
  const formattedEndDate = parsedEndDate
    ? format(parsedEndDate, "dd MMMM yy")
    : "";
  const range =
    parsedStartDate && parsedEndDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "";

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />

      {/* main */}
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchResults = await res.json();

  return {
    props: {
      searchResults,
    },
  };
}
