import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Fantastic Quiz</h1>
            <p style={{color: 'white', fontSize: '9px'}}>version 1.0</p>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}


export default Header;