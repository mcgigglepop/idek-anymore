import {COLOR_PICKER_SET, DATA_DETAILS_TYPE} from '../actionType/CommonTypes';

const initialState = {
  colordata: [],
  detailsStore: [],
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case COLOR_PICKER_SET:
      return {
        ...state,
        colordata: action.colordata,
      };

    case DATA_DETAILS_TYPE:
      return {
        ...state,
        detailsStore: action.data,
      };

    default: {
      return state;
    }
  }
}
