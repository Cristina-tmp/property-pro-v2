import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Crimson_Text } from "next/font/google";
import Router from "next/router";

const crimson = Crimson_Text({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const progress = new ProgressBar({
  size: 4,
  color: "#E63D92",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return (
    <main className={crimson.className}>
      <Component {...pageProps} />;
    </main>
  );
}
