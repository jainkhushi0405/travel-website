import Navbar from "../components/Navbar";
import Searchform from "../components/Searchform";
import TripCards from "../components/TripCards";
import TravelOptions from "../components/TravelOptions";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Searchform />
      <TripCards />
      <TravelOptions />
      <Reviews />
      <Footer />
    </div>
  );
}