import { combineReducers } from 'redux';
import { walletReducer } from './walletReducer';
import { membershipReducer } from './membershipReducer';

const rootReducer = combineReducers({
  wallet: walletReducer,
  membership: membershipReducer
});

export default rootReducer;
