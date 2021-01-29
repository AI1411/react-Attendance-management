import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from '../components/posts/Post';

const UserPosts = (props: any) => {
    const userId = props.match.params.id;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get(`https://sakura.test/api/users/${userId}/posts`);

        setPosts(response.data.data);
    }
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto">
                    <div>
                        <h1 className="text-2xl font-black text-gray-900 pb-6 px-6 md:px-12">
                            MY BLOG
                        </h1>
                    </div>
                    <div className="flex flex-wrap px-6">
                        {posts.map((post, index) =>
                            <Post post={post}/>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserPosts;
