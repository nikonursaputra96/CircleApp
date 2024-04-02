import Detail from "./pages/Detail"
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/threads/:id" element={<Detail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  )
}

export default App
