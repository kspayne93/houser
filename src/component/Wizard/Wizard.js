import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/reducer';

var wizard = (
      <Switch>
         <Route component={ Step1 } path="/wizard/step1"/>
         <Route component={ Step2 } path="/wizard/step2" />
         <Route component={ Step3 } path="/wizard/step3" />
      </Switch>
   )

   function addListing (props) {
      return (
         <div>
            <h2>Add New Listing</h2>
            <Link to='/'>
               <button onClick={() => props.cancel()}>Cancel</button>
            </Link>
            { wizard }
         </div>
      )
   }


   
   export default connect( null, { cancel } )( addListing )