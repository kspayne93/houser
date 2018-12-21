import React from 'react';


function House (props) {

      return(
         <div className='house_detail_box'>
               <p>{props.property_name}</p>
               <p>{props.address}</p>
               <p>{props.city}</p>
               <p>{props.state}</p>
               <p>{props.zip}</p>
               <button 
               // onClick={props.delete} 
               >Delete</button>
         </div>
      )
};

export default House;