import React from 'react';
import Data from '../Data/Data';
import Navigation from '../Navigation/Navigation';

import Show from '../Show/Show';
import './Homes.css'

const Homes = () => {
    return (
        <div className='show'>
            <Navigation></Navigation>
            <Data></Data>
           {/* <Show></Show> */}
        </div>
    );
};

export default Homes;