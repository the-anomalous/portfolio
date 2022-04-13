import './App.scss';
// import { Route } from 'react-router-dom';

import HomePage from './pages/home/home.page'
// import ProjectPage from './pages/project/project.page'


function App() {
  return (
    <div className="App">
      {/* <Route path='/'>
      </Route> */}
      <HomePage /> 
      {/* <ProjectPage />  */}
      {/* <Route path='/project/:name' >
      </Route> */}
    </div>
  );
}

export default App;
