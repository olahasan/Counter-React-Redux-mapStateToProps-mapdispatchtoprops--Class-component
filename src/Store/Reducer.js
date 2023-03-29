import {ADD_NUM} from './Types';
import {MINUS_NUM} from './Types';

const Rducer = (state = 0 , action) => {
    switch(action.type){
      case ADD_NUM :
        return action.payload + 1;
      case MINUS_NUM :
        return action.payload - 1;
      default :
        return state ;  
    }
}

export default Rducer ;