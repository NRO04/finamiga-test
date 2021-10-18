import {
    Switch,
    Route,
} from "react-router-dom";
import Main from "../api-characters";
import './App.css';

function App(): JSX.Element {

    return (
        <Switch>
            <Route path="/">
                <Main/>
            </Route>
        </Switch>
    );
}

export default App;
