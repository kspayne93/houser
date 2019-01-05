import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/reducer';
import '../Wizard/Wizard.css';

var wizard = (
      <Switch>
         <Route component={ Step1 } path="/wizard/step1"/>
         <Route component={ Step2 } path="/wizard/step2" />
         <Route component={ Step3 } path="/wizard/step3" />
      </Switch>
   )

   function addListing (props) {
      return (
         <div className='dash' >
            <div className='dash_subheader'>
               <h2 className='add_new_listing'>Add New Listing</h2>
               <Link to='/'>
                  <button 
                     onClick={() => props.cancel()}
                     className='wizard_cancel_button'
                     >Cancel
                  </button>
                  {/* Since this is a functional component, we can access props by just calling props rather than this.props. */}
               </Link>
            </div>
            { wizard }
         </div>
      )
   }



   export default connect( null, { cancel } )( addListing )