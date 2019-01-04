import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyInfo } from '../../ducks/reducer';

class Step1 extends Component {
   constructor(props) {
      super(props)

      this.state = {
         property_name: '',
         address: '',
         city: '',
         state: '',
         zip: '',
         image: '',
         mortgage: 0,
         rent: 0
      }
   }

   componentDidMount(){
      this.setState({
         property_name: this.props.property_name,
         address: this.props.address,
         city: this.props.city,
         state: this.props.state,
         zip: this.props.zip,
         image: this.props.image,
         mortgage: this.props.mortgage,
         rent: this.props.rent
      })
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


   render() {
      const {property_name, address, city, state, zip} = this.state

      return (
        <div>
         <p>Property Name</p>
           <input 
           type="text"
           id="property_name_input"
           placeholder='Property Name'
           value={this.state.property_name}
           onChange={(e) => this.handleChange('property_name', e.target.value)} />

         <p>Address</p>
           <input 
           type="text"
           id="address_input"
           placeholder='Address'
           value={this.state.address}
           onChange={(e) => this.handleChange('address', e.target.value)} />

         <p>City</p>
           <input 
           type="text"
           id="city_input"
           placeholder='City'
           value={this.state.city}
           onChange={(e) => this.handleChange('city', e.target.value)} />

         <p>State</p>
           <input 
           type="text"
           id="state_input"
           placeholder='State'
           value={this.state.state}
           onChange={(e) => this.handleChange('state', e.target.value)} />

         <p>Zip</p>
           <input 
           type="text"
           id="zip_input"
           placeholder='Zip'
           value={this.state.zip}
           onChange={(e) => this.handleChange('zip', e.target.value)} />

          <Link to='/wizard/step2'>
             <button  onClick={() => this.props.updatePropertyInfo(
                property_name,
                address,
                city,
                state,
                zip
             )}>Next Step</button>
          </Link>
          
        </div>
      )
   }
}

function mapStateToProps(reduxState) {
   const { property_name, address, city, state, zip } = reduxState;

   return {
      property_name,
      address,
      city,
      state,
      zip
   }
}

export default connect( mapStateToProps, { updatePropertyInfo } )( Step1 );