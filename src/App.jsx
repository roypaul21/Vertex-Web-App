import './App.css'
import { Suspense } from 'react'
import router from './router';
import { RouterProvider } from 'react-router-dom'
import Loader from './components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
