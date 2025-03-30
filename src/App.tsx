import './App.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'reactflow/dist/style.css';

import { LayoutFlow } from './components/flow/DagreTree';
import { absolute, flexCenter, fullSize } from './styles';
import ParticlesBackground from './components/ui/particles-background';

function App() {
  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <LayoutFlow />
    </div>
  );
}

export default App;
