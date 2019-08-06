import { createStore } from "redux";

const initialState = {
  units: {
    selectedDistricts: { teryt: "gm", text: "gm" },
    selectedCountys: { teryt: "pow", text: "pow" },
    selectedVoivodeships: { teryt: "woj", text: "woj" }
  },
  entity: {}
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function reducer(state, action) {
  switch (action.type) {
    case "SET-UNITS":
      state.units = action.payload;
      return state;
    case "CLEAR-UNITS":
      state.units = {
        selectedDistricts: { teryt: "gm", text: "gm" },
        selectedCountys: { teryt: "pow", text: "pow" },
        selectedVoivodeships: { teryt: "woj", text: "woj" }
      };
      return state;
    case "GET-ENTITY":
      state.entity = {
        voivodeship: action.payload.voivodeship,
        county: action.payload.county,
        district: action.payload.district
      };
      return state;
    default:
      return state;
  }
}
