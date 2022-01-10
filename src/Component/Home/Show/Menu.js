import React from 'react';

const Menu = (props) => {
    const {Country}=props.services;
    console.log(props.services)
    return (
        <div>
            {/* <h2>tt</h2> */}
       
 
 

       <h1>{Country}</h1>



         
          {/* </div> */}

            
        </div>
    );
};

export default Menu;