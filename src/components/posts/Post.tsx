import React from 'react';

const Post = (props: any) => {
    return (
        <div className="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
            <div className="bg-white hover:shadow-xl">
                <div className="">
                    <img
                        src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="" className="h-56 w-full border-white border-8 hover:opacity-25"/>
                </div>
                <div className="px-4 py-4 md:px-10">
                    <h1 className="font-bold text-lg">
                        {props.post.title}
                    </h1>
                    <p className="py-4">
                        {props.post.short_body}
                    </p>
                    <div className="flex flex-wrap pt-8">
                        <div className="w-full md:w-1/3 text-sm font-medium">
                            NOVEMBER 1,2019
                        </div>
                        <div className="2/3">
                            <div className="text-sm font-medium">
                                SHARE:
                                <a href="" className="text-blue-700 px-1 ">
                                    FACEBOOk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
