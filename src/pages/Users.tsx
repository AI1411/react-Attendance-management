import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from "../components/users/User";
import '../interface/user';
import {UserType} from '../interface/user';
import Wrapper from '../components/layouts/Wrapper';

const Users: React.FC = () => {
    const [users, setUsers] = useState<any>([]);
    const [query, setQuery] = useState<any>('');

    useEffect(() => {
        getUsers(query);
    }, []);

    const getUsers = async (query: string) => {
        const response = await axios.get(`/users?name=${query}`);
        const data = response.data.data;

        setUsers(data);
    };

    return (
        <Wrapper>
            <div className="relative w-full flex flex-col h-screen overflow-y-hidden my-5 mx-5">
                <div className="pt-2 relative text-gray-600">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"
                        onChange={e => getUsers(e.target.value)}
                    />
                </div>
                <table className="min-w-full leading-normal">
                    <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            User
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Branch
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user: UserType, index: number) =>
                        <User user={user} key={index}/>
                    )}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default Users;
