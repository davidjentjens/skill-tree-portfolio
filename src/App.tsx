import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "reactflow/dist/style.css";

import { DagreTree } from "./components/DagreTree";
import Footer from "./components/ui/footer";
import { absolute, flexCenter, fullSize } from "./styles";

function App() {
  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <DagreTree />
      <Footer />
    </div>
  );
}

export default App;
