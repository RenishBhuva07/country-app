import {BASE_STORE_DATA_TYPES} from '../Types';
import {setCountryListInfo} from '../actions/Actions';

interface AppState {
  countryList: any | null;
}

const initialState: AppState = {
  countryList: undefined,
};

type AppAction = ReturnType<typeof setCountryListInfo>;
const rootReducer = (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case BASE_STORE_DATA_TYPES.COUNTRY_DATA:
      return {...state, countryList: action.payload};
    default:
      return state;
  }
};

export default rootReducer;
