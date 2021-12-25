import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoTile from "./components/InfoTile";
import WhenWhere from "./components/WhenWhere";
import TopicsTile from "./components/TopicsTile";

function App() {
  return (
    <div className="">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>
      <Header />
      <InfoTile />
      <WhenWhere />
      <TopicsTile />
      <Footer />
    </div>
  );
}

export default App;
