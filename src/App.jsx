import './App.css'
import { Suspense } from 'react'
import router from './router';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <Suspense fallback={<section style={{backgroundColor:"white", width:"100%", height:"100vh", display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
    <h1 style={{color: "#1663A7"}}>Starting Vertex....</h1>
    </section>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
