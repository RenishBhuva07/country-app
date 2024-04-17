import {BASE_STORE_DATA_TYPES} from '../Types';

interface CountryList {
  type: typeof BASE_STORE_DATA_TYPES.COUNTRY_DATA;
  payload: any;
}
export const setCountryListInfo = (payload: any): CountryList => ({
  type: BASE_STORE_DATA_TYPES.COUNTRY_DATA,
  payload: payload,
});
