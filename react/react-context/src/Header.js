import React from 'react';
import Nav from './Nav';

const Header = ({ user }) => {
    return (
        <>
            <Nav user={user} />
        </>
    );
};

export default Header;