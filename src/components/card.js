import React from 'react';

export default props => {
    return (
        <div className='row'>
            <div className='col s12 m10'>
                <div className='card lime accent-3'>
                    <div className='card-content'>
                        <span className='card-title'>{props.title}</span>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}