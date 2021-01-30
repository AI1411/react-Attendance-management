import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostCreate = (props: any) => {
    const userId = props.match.params.id;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [titleError, setTitleError] = useState('');
    const [bodyError, setBodyError] = useState('');
    // const [isRedirect, setIsRedirect] = useState(false);

    const storePost = () => {
        axios.post(`/posts`, {
            title: title,
            body: body,
            user_id: userId,
        }).then(() => {
            window.location.href = '/posts';
            // setIsRedirect(true);
        }).catch(e => {
            if (e.response.status === 422) {
                const errors = e.response.data.errors;
                if (errors.title) {
                    setTitleError(e.response.data.errors.title[0]);
                } else {
                    setTitleError('');
                }
                if (errors.body) {
                    setBodyError(e.response.data.errors.body[0])
                } else {
                    setBodyError('');
                }
            }
        })
    }

    return (
        <div className="my-auto w-full">
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
            <div
                className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input className={`title block bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded ${titleError && 'border-red-500'}`}
                       spellCheck="false"
                       placeholder="Title" type="text"
                       onChange={e => setTitle(e.target.value)}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 mb-1">{titleError}</span>
                <textarea className={`description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none rounded ${bodyError && 'border-red-500'}`}
                          spellCheck="false" placeholder="Describe everything about this post here"
                          onChange={e => setBody(e.target.value)}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{bodyError}</span>
                <div className="icons flex text-gray-500 m-2">
                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">/
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                    </svg>
                    <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                </div>
                <div className="buttons flex">
                    <div
                        className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel
                    </div>
                    <button
                        className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                        onClick={storePost}
                    >Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCreate;
