import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
   constructor() {
      super()

      this.state = {
         property_name: '',
         address: '',
         city: '',
         state: '',
         zip: ''
      }
   }

   // HANDLERS
   handleChange(prop, val) {
      this.setState({
         [prop]: val
      }, () => {
         console.log(val);
      })
   };



   // AXIOS REQUESTS
   addHouse = () => {
      console.log('adding house')
      const { property_name, address, city, state, zip } = this.state;
      axios.post('/api/inventory', { property_name: property_name, address: address, city: city, state: state, zip: zip })
      .then(() => {
         this.props.history.push('/')
      })
    };

    deleteHouse = (id) => {
      axios.delete(`/api/inventory/${id}`)
    } 



   render() {
      return (
        <div>
           <Link to='/'><button>Cancel</button></Link>

           <input 
           type="text"
           id="property_name_input"
           placeholder='Property Name'
           value={this.state.property_name}
           onChange={(e) => this.handleChange('property_name', e.target.value)} />

           <input 
           type="text"
           id="address_input"
           placeholder='Address'
           value={this.state.address}
           onChange={(e) => this.handleChange('address', e.target.value)} />

           <input 
           type="text"
           id="city_input"
           placeholder='City'
           value={this.state.city}
           onChange={(e) => this.handleChange('city', e.target.value)} />

           <input 
           type="text"
           id="state_input"
           placeholder='State'
           value={this.state.state}
           onChange={(e) => this.handleChange('state', e.target.value)} />

           <input 
           type="text"
           id="zip_input"
           placeholder='Zip'
           value={this.state.zip}
           onChange={(e) => this.handleChange('zip', e.target.value)} />

          <button onClick={() => this.addHouse()}>Complete</button>
          
        </div>
      )
   }
}