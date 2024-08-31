import Root from './pages/Root';
import Home from './pages//Home';
import Create from './pages/Create';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
     
    </Route>
  )
);
function App() {
  return (
    
        
        <RouterProvider router={router} /> 
   
  
  );
}

export default App;
