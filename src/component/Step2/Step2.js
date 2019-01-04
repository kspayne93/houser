import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducks/reducer';

class Step2 extends Component {
   constructor() {
      super()

      this.state = {
         property_name: '',
         address: '',
         city: '',
         state: '',
         zip: '',
         image: '',
         mortgage: '',
         rent: ''
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
      const {image} = this.state

      return (
        <div>
           
           <p>Image URL</p>
           <input 
           type="text"
           id="image_url_input"
           placeholder='URL'
           value={this.state.image}
           onChange={(e) => this.handleChange('image', e.target.value)} />

          <Link to='/wizard/step1'>
             <button onClick={() => this.props.updateImage(image)}>Previous Step</button>
          </Link>
          <Link to='/wizard/step3'>
             <button onClick={() => this.props.updateImage(image)}>Next Step</button>
          </Link>
          
        </div>
      )
   }
}

function mapStateToProps(reduxState) {
   const { image } = reduxState;

   return {
      image
   }
}

export default connect( mapStateToProps, { updateImage } )( Step2 )