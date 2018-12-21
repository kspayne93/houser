import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

export default class Dashboard extends Component {
   constructor() {
      super()

      this.state = {
         houseList: []
      }
   }

   componentDidMount() {
      this.getInventory()
      console.log('anything')
   }


   getInventory = () => {
      axios.get(`/api/inventory`)
         .then(res => {
            this.setState({ houseList: res.data })
         })
         console.log(this.state.houseList);
   };

   deleteHouse = (id) => {
      axios.delete(`/api/inventory/${id}`)
      .then(this.props.getInventory())
    } 


   render() {
      let displayHouses = this.state.houseList.map(house => {
         return (
            <div key={house.id}>
               < House
               id={house.id}
               property_name={house.property_name}
               address={house.address}
               city={house.city}
               state={house.state}
               zip={house.zip}
               delete={this.deleteHouse} />

            </div>
         )
      })

      return (
         <div>
            <div className='dash_subheader'>
            <h2>Dashboard</h2>
            <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
            <h3 className='dash_prop_header'>Home Listings</h3>
            {displayHouses}
         </div>
      )
   }
}