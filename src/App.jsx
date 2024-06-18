import './App.css'
import { Suspense } from 'react'
import router from './router';
import AppNavBar from './components/AppNavBar.jsx';
import { RouterProvider } from 'react-router-dom'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Suspense>
      <AppNavBar />
      <RouterProvider router={router} />
      <Footer />
    </Suspense>
  )
}

export default App
