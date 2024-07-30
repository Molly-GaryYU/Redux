import "./css-google/bottom.css";
import './css-google/googleHome.css';
import './css-google/search.css';
import './css-google/navigation.css';
import NavContent from './js/navigation';

function App() {
  return (
    <div className="main-frame" id="main-frame">
     <div className="navigation">
      <NavContent />
     </div>
     <div className='search'></div>
     <footer className="bottom"></footer>
    </div>
  );
}

export default App;
