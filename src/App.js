import logo from "./logo.svg";
import "./App.css";
import LeftSide from "./containers/LeftSide";
import RightSide from "./containers/RightSide";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div className="w3-row-padding">
          <LeftSide />
          <RightSide />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
