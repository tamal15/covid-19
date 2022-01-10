import React, { useEffect, useState } from 'react';
// import Service from './Service/Service';
import Menu from './Menu';

const Show = () => {

    const [shoe,setShow]=useState([])

    useEffect(()=>{
        //  fetch('https://api.tvmaze.com/search/shows?q=all')
         fetch('https://api.covid19api.com/countries')
         .then(res=>res.json())
         .then(data=>setShow(data))
    },[])
    console.log(shoe)
    return (
      <div>

<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                 {/* {
                        shoe.map(services => <Menu
                            services={services}
                        >

                        </Menu>)
                    } */}
      </div>
      
    );
};

export default Show;