import React from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css'

const Service = (props) => {
    // const {show}=props.services
    // console.log(props.services)
    return (
        <div>

<div data-aos="fade-up" class="col">
              <div className="card  project">
                
             

                
                {/* <h1>{id}</h1> */}
                            {/* <img className="image-design" src={show.image.medium} class="card-img-top" alt="..." /> */}


                          
                <div className="card-body body-designs works">

                <h2 className="tittle">{show.name}</h2>
                <h2 className="tittle">{show.id}</h2>
                               
                 <NavLink to={`/friend/${show.id}`}>
                                
                                <button className="button banners bg-dark">Details Now</button>
                                </NavLink> 
                    
                               {/* <Link>
              <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
                    
              </Link> */}

              {/* <button className="banners bg-dark">
            <a href={site}>Live site</a>
            </button> */}

            
                                  
            
                           </div>

               
              </div>
            </div>

            
        </div>
    );
};

export default Service;



// for (const property in shoe) {
  //     const store=shoe[property]
  //     for(const property in store ){
  //         const store2= store[property]
  //         for(const property in store2){
  //           <h1> (store2[property].total.recovered)</h1>
  //         }
          // console.log(store[property])
      // }
      // console.log(shoe[property])
      // console.log(shoe)
      // console.log(`${property}: ${object[property]}`);
      // }