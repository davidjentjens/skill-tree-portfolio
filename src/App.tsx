import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "reactflow/dist/style.css";

import { DagreTree } from "./components/DagreTree";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div>
      <DagreTree />
      <Footer />
    </div>
  );
}

export default App;
