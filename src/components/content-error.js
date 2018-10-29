import React from 'react';
import { MdError } from 'react-icons/md';

const ContentError = () => {
    return (
        <div className='content-loader-container container-error'>
            <MdError className='error-icon text-warning'/>
            <div className='alert alert-warning alert-no-border text-center' role='alert'>
                Oops! <br/> Something is not right :(
            </div>
        </div>
    )
}

export default ContentError