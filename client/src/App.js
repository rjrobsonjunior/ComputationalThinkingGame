import {Browser, BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from './scenes/homePage'
import LoginPage from './scenes/loginPage'
import ProfilePage from './scenes/profilePage'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<LoginPage/>} />
          <Route path = "/home" element={<HomePage/>} />
          <Route path = "/profile/:userId" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;