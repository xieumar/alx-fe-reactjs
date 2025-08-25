import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile"
import Blogpost from './components/Blogpost';
function App() {


  return (
   <Router>
      <Routes>
        <Route path='/profile/*' element={<Profile />}/>
        <Route path="/blog/:postId" element={<Blogpost />} />
      </Routes>
   </Router>
  )
}

export default App
