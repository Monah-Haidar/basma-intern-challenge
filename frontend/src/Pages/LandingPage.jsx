import Hero from "../components/Hero";
import Header from "../components/Header";
import NewsCategories from "../components/NewsCategories";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="bg-white rounded-xl">
        <Header />
        <Hero />
        <NewsCategories />
        <FAQs />
        <Footer />
        

      </div>
    </>
  );
}
