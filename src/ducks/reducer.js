const initialState = {
   property_name: '',
   address: '',
   city: '',
   state: '',
   zip: 0,
   image: '',
   mortgage: 0,
   rent: 0
};

// ACTION TYPES:
const UPDATE_PROPERTY_INFO = 'UPDATE_PROPERTY_INFO';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MORTGAGE_RENT = 'UPDATE_MORTGAGE_RENT';
const CANCEL = 'CANCEL';

// ACTION CREATORS / ACTION BUILDERS:
export function updatePropertyInfo( property_name, address, city, state, zip ) {
   return { 
     type: UPDATE_PROPERTY_INFO,
     payload: {
        property_name,
        address,
        city,
        state,
        zip
      }
   };
 }

 export function updateImage( image ) {
    return {
      type: UPDATE_IMAGE,
      payload: {
         image
      }
    };
 }

 export function updateMortgageRent( mortgage, rent ) {
    return {
       type: UPDATE_MORTGAGE_RENT,
       payload: {
          mortgage,
          rent
       }
    };
 }

 export function cancel(){
    return {
       type: CANCEL,
       payload: initialState
    };
 }


// REDUCER:
function reducer (state=initialState, action) {
   switch(action.type) {
      case UPDATE_PROPERTY_INFO:
        return Object.assign( {}, state, { 
           property_name: action.payload.property_name,
           address: action.payload.address,
           city: action.payload.city,
           state: action.payload.state,
           zip: action.payload.zip
         } ); //Object.assign moves from left to right: it takes in an empty object, loads state, then adds properties into state or overwrites the existing property with the new value. 
         
      case UPDATE_IMAGE:
         return Object.assign( {}, state, {
            image: action.payload.image
         });

      case UPDATE_MORTGAGE_RENT:
         return Object.assign( {}, state, {
            mortgage: action.payload.mortgage,
            rent: action.payload.rent
         });

      case CANCEL:
         return Object.assign( {}, state, action.payload );

      default:
         return Object.assign ( {}, state );
   }
}




export default reducer;