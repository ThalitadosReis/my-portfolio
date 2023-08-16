import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Banner />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
