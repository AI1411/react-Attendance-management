import React from 'react';
import Nav from '../Nav';

const Wrapper = (props: any) => {
    return (
        <div className="bg-gray-100 font-family-karla flex">
         <Nav/>
            {props.children}
        </div>
    );
};

export default Wrapper;
