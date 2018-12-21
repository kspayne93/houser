import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';

export default class Dashboard extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <div>
            <Link to='/wizard' ><button>Add New Property</button></Link>
            < House />
         </div>
      )
   }
}