import React from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { history } from "./helpers";
import { withNaming } from "@bem-react/classname";
import { InnerLayout } from "./layouts/Inner/InnerLayout";
import "./App.less";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("app");

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className={b()}>
          <Switch>
            <InnerLayout>
              <Route
                exact
                path={"/"}
                render={(props) => <div>hello world</div>}
              />
            </InnerLayout>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
