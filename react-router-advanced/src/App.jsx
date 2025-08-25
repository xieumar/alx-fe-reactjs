import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import BlogPost from './components/Blogpost';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/profile/*' element={<Profile />} />
        <Route path="/blog/:Id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
