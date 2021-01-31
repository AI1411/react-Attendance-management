import React, {useState} from 'react';
import axios from "axios";

const MyComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        axios.post('login', {
            email: email,
            password: password,
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/';
        }).catch(err => {
            console.log('error')
        })
    }
    return (
        <div className="max-w-lg max-w-xs bg-blue-800 shadow-2xl rounded-lg mx-auto mt-56 text-center py-12 mt-4 rounded-xl">
            <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Tailbox</h1>
            <div className="container py-5 max-w-md mx-auto">
                <form method="" action="">
                    <div className="mb-4">
                        <input placeholder="Username"
                               className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="username" type="text"
                               onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">

                        <input placeholder="Password"
                               className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                               id="password" type="password"
                                onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={Login}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-gray-400 " href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyComponent;
