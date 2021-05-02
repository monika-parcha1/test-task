import logo from './logo.svg';
import './App.css';
import Card from "./pages/card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Card}></Route>
          <Route path="*" exact component={Card}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
