import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homes from './Component/Home/Homes/Homes';
// import Details from './Component/Home/Details/Details';
import Login from './Component/Home/Login/Login';
import PrivetRoute from './Component/Home/PrivetRoute/PrivetRoute';
import AuthProvider from './Component/Home/Context/AurhProvider';
import Details from './Component/Home/Details/Details';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Switch>
         <Route exact path='/'>
           <Login></Login>
         </Route>
         <Route  path='/home'>
           <Homes></Homes>
         </Route>
         {/* <Route path='/friend/:id'>
       <Details></Details>
      </Route> */}
      <PrivetRoute path='/friend/:id'>
        <Details></Details>
      </PrivetRoute>
      <Route path='/login'>
        <Login></Login>
      </Route>
       </Switch>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
