import './App.scss';
import HomePage from './pages/home/home.page'
import Preloader from './components/preloader/preloader.component'

const App = () => {
  console.log("👀 Looking for Something ? 👀"); 
 
  return (
    <div className="App">
      <Preloader/>
      <HomePage/> 
     </div>
  );
}

export default App;
