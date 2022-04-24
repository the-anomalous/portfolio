import { lazy, Suspense } from 'react';
import './App.scss';
// import HomePage from './pages/home/home.page'
import Preloader from './components/preloader/preloader.component'
const HomePage = lazy(() => import('./pages/home/home.page'))

const App = () => {
  // console.log("👀 Looking for Something ? 👀"); 

  return (
    <Suspense fallback={ <Preloader/> } >
      <div className="App" onCanPlay={(e) => console.log(e)} >
        <HomePage />
      </div>
    </Suspense>
    // <Preloader/>
  );
}

export default App;
