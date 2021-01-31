import React, {useEffect, useState} from 'react';
import Post from "../../components/posts/Post";
import axios from "axios";
import Wrapper from "../../components/layouts/Wrapper";

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        const response = await axios.get('/posts');

        setAllPosts(response.data.data);
    }
    return (
        <Wrapper>
            <section className="py-12">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-black text-gray-900 px-6 md:px-12">
                            全投稿
                        </h1>
                    </div>
                    <div className="flex flex-wrap px-6">
                        {allPosts.map((post, index) =>
                            <Post post={post}/>
                        )}
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default AllPosts;
