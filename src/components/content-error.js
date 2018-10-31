import React from 'react';
import { MdError } from 'react-icons/md';
import PropTypes from 'prop-types';

const ContentError = (props) => {
    return (
        <div className='content-loader-container container-error'>
            <MdError className='error-icon text-warning'/>
            <div className='alert alert-warning alert-no-border text-center' role='alert'>
                Oops! <br/>
                {(props.errorMesage)? 
                    props.errorMesage : 'Something is not right :('}
            </div>
        </div>
    )
}

ContentError.propTypes = {
    errorMesage: PropTypes.string
}

ContentError.defaultProps = {
    errorMesage: null
}

export default ContentError;