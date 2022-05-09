import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateQ from './components/CreateQ';
import TrackSearch from './components/TrackSearch';
import { useAuth } from "./useAuth";



function App(props) {

  const code = new URLSearchParams(window.location.search).get('code');
  // let accessToken = useAuth(code);
  // console.log(accessToken);
  return (
    // <div>
    // {code ? <Dashboard code={code}/> : <Login/>}
    // </div>
    
    
    <Routes>
      
      <Route path='/queue' element={<Dashboard code={code}/>} />
      <Route path='/' element={<Home code={code}/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<TrackSearch />} />
      <Route path="/:inviteCode" element={<CreateQ />} />  
        

      {/* <Route
          path='/queue'
          element={
            <ProtectedRoute code={code} redirectTo='/login'>
              <Dashboard code={code}/>
            </ProtectedRoute>
          }
        /> */}
    </Routes>
  );
}

export default App;
