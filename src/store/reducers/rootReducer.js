import AuthReducer from './authReducer'
import LearningReducer from './learningReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from "redux-firestore"
import {firebaseReducer} from "react-redux-firebase" 
import adminReducer from "./adminReducer"

const rootReducer = combineReducers({
    auth:AuthReducer,
    learn:LearningReducer,
    admin:adminReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer