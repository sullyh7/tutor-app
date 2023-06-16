
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root';
import Home from './pages/home/Home';
import JoinUs from './pages/joinus/JoinUs';
import JoinTheTeam from './pages/jointheteam/JoinTheTeam';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index path='' element={<Home/>}/>
      <Route index path='join-us' element={<JoinUs/>}/>
      <Route index path='join-the-team' element={<JoinTheTeam/>}/>
    </Route>
  ));
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

