import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from "../components/users/User";
import '../interface/user';
import { UserType } from '../interface/user';

const Users: React.FC = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('https://sakura.test/api/users');
        const data = response.data.data;

        setUsers(data);
    }
    return (
        <div className="bg-white relative w-full flex flex-col h-screen overflow-y-hidden my-5 mx-5">
            <table className="min-w-full leading-normal">
                <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        User
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
    );
};

export default Users;
