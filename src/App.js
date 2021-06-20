import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Search} exact />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
