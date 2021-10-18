import {
    Switch,
    Route,
} from "react-router-dom";
import ApiCharacters from "../api-characters";
import './App.css';

function App(): JSX.Element {

    return (
        <Switch>
            <Route path="/">
                <ApiCharacters />
            </Route>
        </Switch>
    );
}

export default App;
