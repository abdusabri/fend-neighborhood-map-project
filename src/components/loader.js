import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
    return (
        <div className={(props.isMain)?
            'loader-container' : 'content-loader-container'}>
            <div className='loader'></div>
        </div>
    )
}

Loader.propTypes = {
    isMain: PropTypes.bool.isRequired
}

export default Loader;