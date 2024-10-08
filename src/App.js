
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/LoginComponent/Login';
import MainComponent from './Components/MainComponent/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './Components/Parts/WelcomePage/WelcomePage';
import Workspace from './Components/Parts/Workspace/Workspace';
import Creategroups from './Components/Parts/Creategroups/Creategroups';
import PersonOnline from './Components/Parts/PersonOnline/PersonOnline';
import AvailableGroups from './Components/Parts/AvailableGroups/AvailableGroups';
import Conversation from './Components/Parts/Conversation/Conversation';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/app' element={<MainComponent />} >
          <Route path='' element={<WelcomePage />} />
          <Route path='workspace' element={<Workspace />} />
          <Route path='creategroups' element={<Creategroups />} />
          <Route path='persononline' element={<PersonOnline />} />
          <Route path='availablegroups' element={<AvailableGroups />} />
          <Route path='conversation' element={<Conversation />} />
        </Route>

      </Routes>


    </div>
  );
}

export default App;
