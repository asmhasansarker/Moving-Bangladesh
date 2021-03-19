import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/LogIn/Login';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyAccount from './Components/MyAccount/MyAccount';


export const UserContext = createContext()


function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
    newUser: false
  })
  return (
    <div className="body">
      <UserContext.Provider value={[user, setUser]}>
        
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/destination/ride/:rideId">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myaccount">
              <MyAccount></MyAccount>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
