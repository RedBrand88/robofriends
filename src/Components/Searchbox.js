import React, { Fragment } from 'react';

const Searchbox = ({ searchChange }) => {
    return (
        <Fragment>
            <input
                className='ma2 pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </Fragment>
    );
}

export default Searchbox;