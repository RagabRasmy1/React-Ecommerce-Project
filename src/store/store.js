import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combin from './Reducer/rootReducer'
const MyStore = createStore(combin,composeWithDevTools())
export default MyStore;