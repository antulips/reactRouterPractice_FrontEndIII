import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Dogs from "./pages/Dogs/Dogs";
import Cats from "./pages/Cats/Cats";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={() => <Home name="Home" />} />
          <Route
            exact
            path="/guauguaus"
            component={() => <Dogs name="Guaguaus" />}
          />
          <Route
            exact
            path="/miaumiaus"
            component={() => <Cats name="Miaumiaus" />}
          />
        </Switch>
      </Router>
    </div>
  );
}
