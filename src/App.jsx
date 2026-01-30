import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'
import Home from './Home';
import Meal from './Meal';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {path:"",element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"category/:catName",element:<Home/>},
      {path:"meal/:mealId",element:<Meal/>},
    ]},
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
