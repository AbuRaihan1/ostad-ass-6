import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="My React app" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
