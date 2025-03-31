import "@blueprintjs/core/lib/css/blueprint.css";
import "reactflow/dist/style.css";

import { DagreTree } from "./components/DagreTree";
import { ColorLegend } from "./components/ui/ColorLegend";
import Footer from "./components/ui/Footer";
import { LegendProvider } from "./context/LegendContext";

function App() {
  return (
    <LegendProvider>
      <DagreTree />
      <ColorLegend />
      <Footer />
    </LegendProvider>
  );
}

export default App;
