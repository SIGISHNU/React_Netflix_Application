
import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/navbar/NavBar';
import { Originals,Romantic,Horror,Action,Comedy } from './Urls'
import RowPost from './Component/RowPost/RowPost';


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost urls={Originals} title="Netflix Originals" />
      <RowPost urls={Action} title="Action Movies" isSmall />
      <RowPost urls={Romantic} title="Romantic Movies" isSmall />
      <RowPost urls={Horror} title="Horror Movies" isSmall />
      <RowPost urls={Comedy} title="Comedy Movies" isSmall />

    </div>
  );
}

export default App;
