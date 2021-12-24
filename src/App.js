import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="sticky top-0 w-full">
        <Navbar />
      </div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
