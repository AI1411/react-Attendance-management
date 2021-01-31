import React from 'react';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './pages/Users';
import UserDetail from "./pages/UserDetail";
import UserPosts from "./pages/UserPosts";
import PostDetail from "./components/posts/PostDetail";
import PostCreate from "./pages/posts/PostCreate";
import AllPosts from "./pages/posts/AllPosts";
import { AuthProvider } from './Auth';
import Login from "./pages/Auth/Login";

function App() {
    return (
        <BrowserRouter>
            {/*<AuthProvider>*/}
                <Route path={'/users'} exact component={Users}/>
                <Route path={'/users/:id'} exact component={UserDetail}/>
                <Route path={'/users/:id/posts'} exact component={UserPosts}/>
                <Route path={'/users/:id/posts/:id'} exact component={PostDetail}/>
                <Route path={'/users/:id/postCreate'} exact component={PostCreate}/>
                <Route path={'/posts'} exact component={AllPosts}/>
                <Route path={'/login'} exact component={Login}/>
            {/*</AuthProvider>*/}
        </BrowserRouter>
    );
}

export default App;
