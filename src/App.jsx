import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainArea from "./components/MainArea/MainArea";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="my-grid">
      <Header />
      <Navigation />
      <MainArea />
      <Footer />
    </div>
  );
}

export default App;
