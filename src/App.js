import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {action,horror,originals} from './components/urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='netflix originals'/>
      <RowPost url={horror} title='horror' issmall/>
    </div>
  );
}

export default App;
