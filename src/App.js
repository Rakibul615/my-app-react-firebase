import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './Shipping/Shipping';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
         
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
