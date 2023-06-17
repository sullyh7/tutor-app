
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root';
import Home from './pages/home/Home';
import JoinUs from './pages/joinus/JoinUs';
import JoinTheTeam from './pages/jointheteam/JoinTheTeam';
import {login, signUp } from '../lib/pocketbase';
import Login from './pages/login/Login';
import Portal from './pages/portal/Portal';
function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index path='' element={<Home/>}/>
      <Route index path='join-us' element={<JoinUs/>}/>
      <Route index path='join-the-team' element={<JoinTheTeam/>}/>
      <Route index path='login' element={<Login/>}/>
      <Route path="portal" element={ <Portal/> }>
        <Route path="teacher" element={ <Portal/> }/>
        <Route path="student" element={ <Portal/> }/> 
        <Route path="admin" element={ <Portal/> }/>  
      </Route>
    </Route>
  
  )); 
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

