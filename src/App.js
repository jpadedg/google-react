import './App.css';
import Menu from './componentes/Menu/Menu';
import Content from './componentes/Content/Content'
import Localization from './componentes/Localization/Localization';
import Siderbar from './componentes/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Content/>
      <Localization/>
      <Siderbar/>
    </div>
  );
}

export default App;
