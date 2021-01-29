import React from 'react';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './pages/Users';
import UserDetail from "./pages/UserDetail";

function App() {
    return (
        <BrowserRouter>
            <Route path={'/users'} exact component={Users}/>
            <Route path={'/users/:id'} exact component={UserDetail}/>
        </BrowserRouter>
    );
}

export default App;
