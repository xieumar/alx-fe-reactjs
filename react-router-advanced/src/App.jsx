import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Blogpost from './components/Blogpost';
function App() {


  return (
   <Router>
      <Routes>
        <Route path='/profile/*' element={<Profile />}/>
        <Route path="/blog/:postId" element={<Blogpost />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
   </Router>
  )
}

export default App
