import {createBrowserRouter} from 'react-router-dom';

export default function App(){

  createBrowserRouter(
    [
      {
        path:'/', 
        element: <Home />
      }
    ])
    
  return(
    <h1>Hello This is from vite</h1>
  )
}
