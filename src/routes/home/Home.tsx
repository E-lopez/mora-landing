import Footer from "@/components/footer/Footer";
import Heading from "./components/Heading";
import ThirdSection from "./components/ThirdSection";
import StartButton from "./components/StartButton";
import useScrollToTop from "@/hooks/domEvents/useScrollToTop";
import SecondSectionB from "./components/SecondSectionB";


const Home = () => {  
  useScrollToTop();

  return(
    <div className="home-container">
      <Heading />
      <SecondSectionB />
      <ThirdSection />
      <Footer />
      <StartButton />
    </div>
  )
}

export default Home;
