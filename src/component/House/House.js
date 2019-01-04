import React from 'react';
import '../House/House.css';


function House (props) {
   const { id, property_name, address, city, state, zip, image, mortgage, rent} = props 
   //received props from Dashboard component then deconstructed to be accessed
   
      return(
         <div className='house_container'>
            <div className='house_detail_box'>
               <img src={image} alt="" className='property_img'/>
            </div>
            <div className='house_detail_box'>
               <p>Property Name: {property_name}</p>
               <p>Address: {address}</p>
               <p>City: {city}</p>
               <p>State: {state}</p>
               <p>Zip: {zip}</p>
            </div>  
            <div className='house_detail_box'> 
               <p>Mortgage: {mortgage}</p>
               <p>Rent: {rent}</p>
               <button className='house_delete_button' onClick={()=>props.deleteHouse(id)} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII=" alt=""/></button>
               {/* onclick is invoking the deleteHouse method from Dashboard and giving it the id of the house as an argument. Id is pulled from props by deconstructing above */}
            </div>
         </div>
      )
};

export default House;