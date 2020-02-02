import React, {Component}  from 'react';
import Test from "./src/components/Test";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Test}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

