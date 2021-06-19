import {weatherConstants} from '../../constants';

const initialState = {
  weatherInfoList: [],
  weatherInfo: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case weatherConstants.WEATHER_INFO_LIST: {
      return {
        ...state,
        weatherInfoList: payload,
      };
    }
    case weatherConstants.WEATHER_INFO: {
      return {
        ...state,
        weatherInfo: payload,
      };
    }
    default:
      return state;
  }
}
