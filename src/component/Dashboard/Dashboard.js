import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';
import '../Dashboard/Dashboard.css'

export default class Dashboard extends Component {
   constructor() {
      super()

      this.state = {
         houseList: []
      }
   }

   componentDidMount() {
      this.getInventory()
   }


   getInventory = () => {
      axios.get(`/api/inventory`)
         .then(res => {
            this.setState({ 
               houseList: res.data 
            })
         })
         console.log(this.state.houseList);
   };

   deleteHouse = (id) => {
      axios.delete(`/api/inventory/${id}`)
         .then(this.getInventory())
   }


   render() {
      let displayHouses = this.state.houseList.map(house => {
         return (
            <div key={house.id} className="House">
               < House
               id={house.id}
               property_name={house.property_name}
               address={house.address}
               city={house.city}
               state={house.state}
               zip={house.zip}
               image={house.image}
               mortgage={house.mortgage}
               rent={house.rent}
               houseList={this.state.houseList}
               deleteHouse={this.deleteHouse} /> 
               {/* deleteHouse is props being passed down to the House component */}
            </div>
         )
      })

      return (
         <div className='dash' >
            <div className='dash_subheader'>
            <h2 className='dash_heading' >Dashboard</h2>
            <Link to='/wizard/step1'>
               <button className='dash_subheader_button'>Add New Property</button>
            </Link>
            </div>
            <div className="dash_prop_container">
               <h3 className='dash_prop_header'>Home Listings</h3>
               {displayHouses}  
            </div>
         </div>
      )
   }
}