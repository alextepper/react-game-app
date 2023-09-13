import Canvas from "./canvas/index";
import Customizer from "./pages/Customizer";
import Home from "./pages/home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
