
import {
    Switch,
    Route, Redirect, BrowserRouter as Router
} from "react-router-dom";
import Main from "../api-characters";
import ContactBook from "../contact-book/infrastructure";
import './App.css';

function App(): JSX.Element {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/contact-book" component={ContactBook} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );

}

export default App;
