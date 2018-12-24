import React from 'react';


function House (props) {
   const { id, property_name, address, city, state, zip } = props 
   //received props from Dashboard component then deconstructed to be accessed
   
      return(
         <div className='house_detail_box'>
               <p>{props.property_name}</p>
               <p>{props.address}</p>
               <p>{props.city}</p>
               <p>{props.state}</p>
               <p>{props.zip}</p>
               <button onClick={()=>props.deleteHouse(id)} >Delete</button>
               {/* onclick is invoking the deleteHouse method from Dashboard and giving it the id of the house as an argument. Id is pulled from props by deconstructing above */}
         </div>
      )
};

export default House;