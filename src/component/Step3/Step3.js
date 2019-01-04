import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgageRent } from '../../ducks/reducer';

class Step3 extends Component {
   constructor() {
      super()
      this.state = {
         property_name: '',
         address: '',
         city: '',
         state: '',
         zip: 0,
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
   addHouse = () => {
      const { property_name, address, city, state, zip, image, mortgage, rent } = this.state;
      
      axios.post('/api/inventory', { property_name: property_name, address: address, city: city, state: state, zip: zip, image: image, mortgage: mortgage, rent: rent })
      .then(() => {
         this.props.history.push('/')
      })
    };



   render() {
      const {mortgage, rent} = this.state

      return (
        <div>

         <p>Recommended Rent: $0</p>
           
         <p>Monthly Mortgage Amount</p>
           <input 
           type="text"
           id="mortgage_input"
           value={this.state.mortgage}
           onChange={(e) => this.handleChange('mortgage', e.target.value)} />

         <p>Desired Monthly Rent</p>
           <input 
           type="text"
           id="rent_input"
           value={this.state.rent}
           onChange={(e) => this.handleChange('rent', e.target.value)} />

          <Link to='/wizard/step2'>
             <button onClick={() => this.props.updateMortgageRent(mortgage, rent)}>Previous Step</button>
          </Link>
          <button onClick={() => this.addHouse()}>Complete</button>
          
        </div>
      )
   }
}

function mapStateToProps(reduxState) {
   const { property_name, address, city, state, zip, image, mortgage, rent } = reduxState;

   return {
      property_name,
      address,
      city,
      state,
      zip,
      image,
      mortgage,
      rent
   }
}

export default connect( mapStateToProps, { updateMortgageRent } )( Step3 );