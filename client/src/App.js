import {
    BrowserRouter as Router, Switch, Route
  } from "react-router-dom";
  import { RecoilRoot } from 'recoil';
import HomePage from "./pages/HomePage";
import AttractionsPage from "./pages/AttractionsPage";

const App = () => {
    return (
    <RecoilRoot>
        <Router>
            <Switch>
                <Route path='/' exact>
                    <HomePage/>
                </Route>
                <Route path='/attractions'>
                    <AttractionsPage/>
                </Route>
            </Switch>
        </Router>
    </RecoilRoot>
    )
}

export default App;