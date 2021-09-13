import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Dogs from "./pages/Dogs/Dogs";
import Cats from "./pages/Cats/Cats";
import Error from "./pages/Error/Error";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={() => <Home name="Home" />} />
          <Route path="/guauguaus" component={() => <Dogs name="Guaguaus" />} />
          <Route
            path="/miaumiaus"
            component={() => <Cats name="Miaumiaus" />}
          />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
