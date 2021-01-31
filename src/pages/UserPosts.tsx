import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from '../components/posts/Post';
import Wrapper from "../components/layouts/Wrapper";

const UserPosts = (props: any) => {
    const userId = props.match.params.id;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get(`/users/${userId}/posts`);

        setPosts(response.data.data);
    }
    return (
        <Wrapper>
            <section className="py-12">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-black text-gray-900 px-6 md:px-12">
                            MY BLOG
                        </h1>
                        <button onClick={() => window.location.href = `/users/${userId}/postCreate`} className="px-4 py-1 text-white font-light tracking-wider bg-sidebar rounded"
                                type="submit">投稿する
                        </button>
                    </div>
                    <div className="flex flex-wrap px-6">
                        {posts.map((post, index) =>
                            <Post post={post}/>
                        )}
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default UserPosts;
