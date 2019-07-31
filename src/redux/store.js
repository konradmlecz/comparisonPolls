import { createStore } from "redux";

const initialState = {
  units: {
    selectedDistricts: { teryt: "gm", text: "gm" },
    selectedCountys: { teryt: "pow", text: "pow" },
    selectedVoivodeships: { teryt: "woj", text: "woj" }
  }
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
    default:
      return state;
  }
}
