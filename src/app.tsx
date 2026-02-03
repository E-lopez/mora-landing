import Router from './router/router.tsx';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return(
    <RouterProvider router={Router} />
  )
}

export default App;