import Pay from "./Pay";
import Success from "./Success";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
