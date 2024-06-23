import './App.css'
import { Suspense } from 'react'
import router from './router';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
