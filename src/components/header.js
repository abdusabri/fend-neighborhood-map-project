import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='navbar navbar-dark bg-dark'  
                style={{zIndex: 3}}>
                <h1 className='navbar-brand mb-0 h1'>
                    Neighborhood Map
                </h1>
            </div>
        </header>
    );
}

export default Header;