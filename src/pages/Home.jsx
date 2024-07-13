import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col   justify-between py-4 sm:py-8  items-center text-center h-[100vh] w-[100vw] bg-gradient-to-r sm:bg-gradient-to-b from-blue-400 via-blue-50 to-blue-400 ">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Home;
