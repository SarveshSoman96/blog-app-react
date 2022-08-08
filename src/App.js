import React, { useEffect } from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {

  useEffect(() => {
      window.addEventListener("beforeunload", () => {
        localStorage.clear()
      })
  }, [])

  return (
    <>   
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>

  )
}

export default App