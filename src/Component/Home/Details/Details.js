import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div>


            {/* form  */}





<div className=' mx-auto  p-5 m-5 background-design'>
       
        <form  className='text-left my-5'>
        <div>
            <label htmlFor='name' className='emails'>
             Show Name:
            </label>
            <br />
         
            <input
            type='name'
            // onBlur={handleUpdate}
            name='name'
            id='name'
            // onChange={handleName}
            required
            className=' outline-none px-3 py-2 '
          />
         
          </div>


          <div>
            <label htmlFor='email' className='emails'>
              Price
            </label>
            <br />
            <input
              type='email'
              name='email'
              id='email'
            //   onChange={handleEmail}
              required
              className=' outline-none px-3 py-2 '
            />
          </div>
         
           
         <button
            type='submit'
            className='bg-dark text-white px-4 py-2  mt-3 w-full'
          >
            Booking
          </button>
         {/* </Link> */}
        </form>

        
    
    
       
      </div>

            {/* form */}
            
        </div>
    );
};

export default Details;